import React, { useState, useEffect, useRef } from 'react';
export default function Chat() {
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState('');
  const endRef = useRef(null);
  useEffect(() => endRef.current?.scrollIntoView(), [msgs]);
  const send = (user) => { setMsgs([...msgs, { text, user }]); setText(''); };
  return (
    <div>
      <h3>Real-Time Chat</h3>
      <div style={{ height: '150px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {msgs.map((m, i) => <p key={i} style={{ textAlign: m.user === 'Me' ? 'right' : 'left' }}><b>{m.user}:</b> {m.text}</p>)}
        <div ref={endRef} />
      </div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => send('Me')}>Send</button>
      <button onClick={() => send('Them')}>Receive</button>
    </div>
  );
}