const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize MySQL Connection Pool
const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME,
});

// Add lead
app.post('/api/leads', async (req, res) => {
    try {
        const { name, phone, source } = req.body;
        const [result] = await pool.query(
            "INSERT INTO leads (name, phone, source) VALUES (?, ?, ?)",
            [name, phone, source]
        );
        
        // Fetch the newly inserted lead to return to the frontend
        const [newLead] = await pool.query("SELECT * FROM leads WHERE id = ?", [result.insertId]);
        res.json(newLead[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

// Get all leads
app.get('/api/leads', async (req, res) => {
    try {
        const [allLeads] = await pool.query("SELECT * FROM leads ORDER BY created_at DESC");
        res.json(allLeads);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

// Update lead status
app.put('/api/leads/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        
        await pool.query(
            "UPDATE leads SET status = ? WHERE id = ?",
            [status, id]
        );
        
        // Fetch the updated lead to return to the frontend
        const [updatedLead] = await pool.query("SELECT * FROM leads WHERE id = ?", [id]);
        res.json(updatedLead[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

// Delete lead
app.delete('/api/leads/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM leads WHERE id = ?", [id]);
        res.json({ message: "Lead deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});