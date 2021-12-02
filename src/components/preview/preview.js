import React from 'react';

import './preview.css';

export default function Preview({ phrase }) {
  return (
    <div className="preview">
      <p>{phrase}</p>
    </div>
  );
}