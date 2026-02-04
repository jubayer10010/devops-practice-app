const express = require('express');
const cors = require('cors');
const app = express();

// 1. Simplest possible configuration
app.use(cors());

// 2. Direct route - no variables, just hardcoded data
app.get('/api/tasks', (req, res) => {
    console.log('Received a request at /api/tasks');
    res.send([{ id: 1, task: "Connection Success!" }]);
});

// 3. Simple listener
app.listen(5000, '0.0.0.0', () => {
    console.log('Backend is physically listening on port 5000');
});

