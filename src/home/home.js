import React, { useState } from 'react';

import Preview from '../components/preview/preview';
import Editor from '../components/editor/editor';

import './home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [phraseList, setPhraseList] = useState([]);

  return (
    <main>
      {}
      <div id="editor">
        <Editor {...{ head, setHead, body, setBody, bottom, setBottom, phrase, setPhrase, headCount, setHeadCount, bodyCount, setBodyCount, bottomCount, setBottomCount, phraseList, setPhraseList }} />
        {<p>You have changed the head {headCount} times, the body {bodyCount} times, and the pants {bottomCount} times. And nobody can forget your character&apos;s classic catchphrases:</p>}
        {!!phraseList.length && (
          <div id="list">
            {phraseList.map((elem) => (
              <p key={elem}>{elem}</p>
            ))}
          </div>
        )}
      </div>
      <Preview {...{ head, body, bottom, phrase }} />
    </main>
  );
}