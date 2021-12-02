import React, { useState } from 'react';

import Preview from '../components/preview/preview';
import Editor from '../components/editor/editor';

import './home.css';

export default function Home() {
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('blue');
  const [bottom, setBottom] = useState('single leg');
  const [phrase, setPhrase] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [phraseList, setPhraseList] = useState([]);

  return (
    <main>
      {}
      <Preview {...{ head, body, bottom, phrase }} />
      <Editor {...{ head, setHead, body, setBody, bottom, setBottom, phrase, setPhrase, headCount, setHeadCount, bodyCount, setBodyCount, bottomCount, setBottomCount, phraseList, setPhraseList }} />
      {!!headCount && <p>You have changed the head {headCount} times,</p>}
      {!!bodyCount && <p>the body {bodyCount} times,</p>}
      {!!bottomCount && <p>and the pants {bottomCount} times.</p>}
      {!!phraseList.length && (
        <div>
          <p>And nobody can forget your character catchphrases:</p>
          {phraseList.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      )}
    </main>
  );
}