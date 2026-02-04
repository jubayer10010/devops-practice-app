async function loadTasks() {
    try {
        const response = await fetch('http://localhost:5000/api/tasks');
        const tasks = await response.json();
        const list = document.getElementById('task-list');
        list.innerHTML = ''; 

        tasks.forEach(t => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${t.task}</strong> - ${t.status}`;
            list.appendChild(li);
        });
    } catch (err) {
        console.error("Backend unreachable:", err);
        document.getElementById('task-list').innerHTML = '<li>Error: Could not connect to API</li>';
    }
}

document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif;">
        <h1 style="color: #2c3e50;">DevOps Task Tracker v1.0</h1>
        <ul id="task-list"><li>Connecting to backend...</li></ul>
    </div>
`;

loadTasks();
