import React from 'react';

import './preview.css';

export default function Preview({ head, body, bottom, phrase }) {
  return (
    <div className="preview">
      <p>{phrase}</p>
    </div>
  );
}