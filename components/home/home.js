import React, { useState } from 'react';

import Preview from '../preview/preview';
import Editor from '../editor/editor';

import './home.css';

export default function Home() {
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('blue');
  const [bottom, setBottom] = useState('single leg');
  const [phrase, setPhrase] = useState('');

  return (
    <main>
      {}
      <Preview {...{ head, body, bottom, phrase }} />
      <Editor {...{ head, setHead, body, setBody, bottom, setBottom, phrase, setPhrase }} />
    </main>
  );
}