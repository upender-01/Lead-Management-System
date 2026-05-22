# Task Manager

A full-stack task management application built with a React frontend and a Node.js/Express backend. This project allows users to create, view, update (mark as completed), and delete tasks.

## Technologies Used

* **Frontend:** React, Tailwind CSS (via Vite)
* **Backend:** Node.js, Express, CORS
* **Database:** In-memory array (resets on server restart)

## Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (which includes npm)

## Project Structure

The project is divided into two main folders:

* `task-manager-backend/`: Contains the Node.js API server.
* `task-manager-frontend/`: Contains the React web application.

---

## Setup and Installation

### 1. Backend Setup

1.  Open a terminal and navigate to the backend directory:
    ```bash
    cd task-manager-backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the backend server:
    ```bash
    node server.js
    ```
    *The server will start running on `http://localhost:5000`.*

### 2. Frontend Setup

1.  Open a **new** terminal window and navigate to the frontend directory:
    ```bash
    cd task-manager-frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    *The application will open in your default browser, typically at `http://localhost:5173` or `http://localhost:3000`.*

---

## API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Retrieves a list of all tasks. |
| `POST` | `/tasks` | Creates a new task. Requires a JSON body with a `title` string. |
| `PATCH` | `/tasks/:id` | Updates the status of a task. Requires a JSON body with a `completed` boolean. |
| `DELETE`| `/tasks/:id` | Deletes a task by its ID. |

## Notes and Assumptions

* **Data Persistence:** This application currently uses an in-memory array for data storage to keep setup simple. If you restart the backend server (`server.js`), all created tasks will be cleared.
* **Unique IDs:** Task IDs are generated using `Date.now().toString()`. While sufficient for this small-scale application, a production environment would use a robust database ID or a UUID package.
* **Styling:** Tailwind CSS is used on the frontend for rapid and clean UI development.# Lead-Management-System
