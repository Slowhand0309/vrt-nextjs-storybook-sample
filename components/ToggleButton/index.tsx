import React, { useState } from 'react';
import './index.css';

export type ToggleButtonProps = {};

const ToggleButton: React.VFC = () => {
  const [on, setOn] = useState(false);
  return (
    <div style={{ padding: '0.5rem' }}>
      <button className="toggle-button" onClick={() => setOn(!on)}>
        {on ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleButton;
