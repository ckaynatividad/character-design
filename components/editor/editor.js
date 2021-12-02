import React from 'react';

import './editor.css';

export default function Editor({ head, setHead, body, setBody, bottom, setBottom, phrase, setPhrase }) {
  return (
    <div className="editor">
      <div className="form-control">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird">{'bird'}</option>
          <option value="duck">duck</option>
          <option value="dog">dog</option>
          <option value="horse">horse</option>
        </select>
        <label>head</label>
      </div>
      <div className="form-control">
        <select value={body} onChange={(e) => setBody(e.target.value)}>
          <option value="blue">{'blue'}</option>
          <option value="fancy">fancy</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
        </select>
        <label>body</label>
      </div>
      <div className="form-control">
        <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
          <option value="single-leg">{'single leg'}</option>
          <option value="blue jeans">blue jeans</option>
          <option value="pant leg">pant leg</option>
        </select>
        <label>bottom</label>
      </div>
      <div className="form-control">
        <input name="phrase" type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)}/>
        <label htmlFor="phrase">Catchphrase</label>
      </div>
    </div>
  );
}