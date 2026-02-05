async function loadTasks() {
    try {
        const response = await fetch('http://localhost:5000/api/tasks');
        const tasks = await response.json();
        const list = document.getElementById('task-list');
        list.innerHTML = ''; 

        tasks.forEach(t => {
            const li = document.createElement('li');
            li.style.padding = "10px";
            li.style.borderBottom = "1px solid #ddd";
            li.innerHTML = `
                <strong>${t.task}</strong> - <span>${t.status}</span>
                <button onclick="deleteTask(${t.id})" style="float:right; color:red; cursor:pointer;">Delete</button>
            `;
            list.appendChild(li);
        });
    } catch (err) {
        document.getElementById('task-list').innerHTML = '<li>Error connecting to Backend</li>';
    }
}

// Making the function global so the button 'onclick' can find it
window.deleteTask = async (id) => {
    if(confirm("Are you sure you want to delete this task?")) {
        await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });
        loadTasks(); // Refresh the list
    }
}

document.body.innerHTML = `
    <div style="max-width: 500px; margin: 40px auto; font-family: sans-serif; border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
        <h1 style="text-align: center;">Task Tracker v1.1</h1>
        <ul id="task-list" style="list-style: none; padding: 0;"><li>Loading...</li></ul>
    </div>
`;

loadTasks();
