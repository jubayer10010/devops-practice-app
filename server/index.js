const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// This is our temporary "Database"
let tasks = [
    { id: 1, task: "Master Git Branching", status: "In Progress" },
    { id: 2, task: "Establish Backend Link", status: "Completed" },
    { id: 3, task: "Deploy v1.1 Update", status: "Pending" }
];

// GET: Fetch all tasks
app.get('/api/tasks', (req, res) => {
    console.log('GET request: Sending tasks list');
    res.json(tasks);
});

// DELETE: Remove a task by ID
app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    console.log(`DELETE request: Removing task ${id}`);
    tasks = tasks.filter(t => t.id !== parseInt(id));
    res.status(200).json({ message: "Task deleted successfully" });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`v1.1 Backend live on port ${PORT}`);
});
