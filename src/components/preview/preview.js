import React from 'react';

import './preview.css';

export default function Preview({ head, body, bottom }) {
  return (
    <div className="preview">
      <img alt={head} src={`${process.env.PUBLIC_URL}/assets/${head}-head.png`} />
      <img alt={body} src={`${process.env.PUBLIC_URL}/assets/${body}-middle.png`} />
      <img alt={bottom} src={`${process.env.PUBLIC_URL}/assets/${bottom}-pants.png`} />
    </div>
  );
}