import React from 'react';

import './editor.css';

export default function Editor({ head, setHead, setHeadCount, body, setBody, setBodyCount, bottom, setBottom, setBottomCount, phrase, setPhrase, setPhraseList }) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
    setBodyCount((prevState) => prevState + 1);
  };
  const handleBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };
  const handleClick = () => {
    setPhraseList((prevState)=> [...prevState, phrase]);
    setPhrase(``);
  };
  return (
    <div className="editor">
      <div className="form-control">
        <label>head </label>
        <select value={head} onChange={handleHead}>
          <option value="bird">{'bird'}</option>
          <option value="duck">duck</option>
          <option value="dog">dog</option>
          <option value="horse">horse</option>
        </select>
      </div>
      <div className="form-control">
        <label>body </label>
        <select value={body} onChange={handleBody}>
          <option value="blue">{'blue'}</option>
          <option value="fancy">fancy</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
        </select>
      </div>
      <div className="form-control">
        <label>bottom </label>
        <select value={bottom} onChange={handleBottom}>
          <option value="single-leg">{'single leg'}</option>
          <option value="blue jeans">blue jeans</option>
          <option value="pant leg">pant leg</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="phrase">Catchphrase </label>
        <input name="phrase" type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}