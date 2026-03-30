import React, { useState } from 'react';
export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [val, setVal] = useState('');
  const [prio, setPrio] = useState('Low');
  const add = () => setTasks([...tasks, { id: Date.now(), val, prio, done: false }]);
  return (
    <div>
      <h3>Task Scheduler</h3>
      <input onChange={e => setVal(e.target.value)} />
      <select onChange={e => setPrio(e.target.value)}><option>Low</option><option>High</option></select>
      <button onClick={add}>Add</button>
      {['High', 'Low'].map(p => (
        <div key={p}>
          <h4>{p} Priority</h4>
          {tasks.filter(t => t.prio === p).map(t => (
            <p key={t.id} onClick={() => setTasks(tasks.map(x => x.id === t.id ? {...x, done: !x.done} : x))}
               style={{ textDecoration: t.done ? 'line-through' : 'none', cursor: 'pointer' }}>{t.val}</p>
          ))}
        </div>
      ))}
    </div>
  );
}