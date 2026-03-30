import React, { useState } from 'react';
import Inventory from './Inventory';
import Results from './Results';
import Chat from './Chat';
import Form from './Form';
import Tasks from './Tasks';

export default function App() {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch(view) {
      case 'inv': return <Inventory />;
      case 'res': return <Results />;
      case 'chat': return <Chat />;
      case 'form': return <Form />;
      case 'task': return <Tasks />;
      default: return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>🚀 My React Assessment Portfolio</h1>
          <p>Select a project from the menu above to see it in action.</p>
        </div>
      );
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '10px', background: '#f4f4f4', borderRadius: '8px' }}>
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('inv')}>Inventory</button>
        <button onClick={() => setView('res')}>Results</button>
        <button onClick={() => setView('chat')}>Chat</button>
        <button onClick={() => setView('form')}>Register</button>
        <button onClick={() => setView('task')}>Tasks</button>
      </nav>
      <div style={{ marginTop: '30px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        {renderView()}
      </div>
    </div>
  );
}