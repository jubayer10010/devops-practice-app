const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/tasks', (req, res) => {
    res.json([{ id: 1, task: "Learn Git Branching" }, { id: 2, task: "Setup CI/CD" }]);
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
