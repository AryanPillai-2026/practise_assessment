import React, { useState } from 'react';
export default function Results() {
  const [students] = useState([{ name: 'Aryan', marks: [85, 90, 78, 92, 88] }]);
  const [filter, setFilter] = useState(0);
  return (
    <div>
      <h3>Student Results</h3>
      <input type="number" placeholder="Min Average" onChange={e => setFilter(e.target.value)} />
      {students.filter(s => (s.marks.reduce((a,b)=>a+b)/5) >= filter).map((s, i) => {
        const avg = s.marks.reduce((a,b)=>a+b)/5;
        return <p key={i}>{s.name} - Avg: {avg}% - {avg >= 40 ? "✅ Pass" : "❌ Fail"}</p>
      })}
    </div>
  );
}