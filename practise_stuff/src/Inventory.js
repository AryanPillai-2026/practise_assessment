import React, { useState } from 'react';
export default function Inventory() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', stock: 0 });
  const add = () => {
    if (items.some(i => i.id === form.id)) return alert("Duplicate ID");
    setItems([...items, form]);
  };
  return (
    <div>
      <h3>Inventory Management</h3>
      <input placeholder="ID" onChange={e => setForm({...form, id: e.target.value})} />
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input type="number" placeholder="Stock" onChange={e => setForm({...form, stock: Number(e.target.value)})} />
      <button onClick={add}>Add</button>
      {items.map(i => (
        <p key={i.id} style={{ color: i.stock < 5 ? 'red' : 'black' }}>
          {i.name} (Stock: {i.stock}) {i.stock < 5 && "⚠️ LOW"}
        </p>
      ))}
    </div>
  );
}