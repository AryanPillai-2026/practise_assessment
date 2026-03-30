import React, { useState } from 'react';
export default function Form() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: '', email: '', city: '' });
  return (
    <div>
      <h3>Step {step} of 3</h3>
      {step === 1 && <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} />}
      {step === 2 && <input placeholder="City" onChange={e => setData({...data, city: e.target.value})} />}
      {step === 3 && <p>Confirming: {data.name} from {data.city}</p>}
      <br />
      {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
      {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
    </div>
  );
}