import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h1>DevOps Task List</h1>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.task}</li>)}
      </ul>
    </div>
  );
}
export default App;
