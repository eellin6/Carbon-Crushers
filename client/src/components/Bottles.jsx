/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* tslint:disable */

import * as React from 'react';
import axios from 'axios';
import { useRef, useState, useEffect, useReducer } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
// const mobilenet = require('@tensorflow-models/mobilenet');

const machine = {
  initial: 'initial',
  states: {
    initial: { on: { next: 'loadingModel' } },
    loadingModel: { on: { next: 'modelReady' } },
    modelReady: { on: { next: 'imageReady' } },
    imageReady: { on: { next: 'identifying' }, showImage: true },
    identifying: { on: { next: 'complete' } },
    complete: { on: { next: 'modelReady' }, showImage: true, showResults: true }
  }
};

const Bottles = () => {
  const [results, setResults] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [model, setModel] = useState(null);
  const imageRef = useRef();
  const inputRef = useRef();

  const reducer = (state, event) =>
    machine.states[state].on[event] || machine.initial;

  const [appState, dispatch] = useReducer(reducer, machine.initial);
  const next = () => dispatch('next');

  const loadModel = async () => {
    next();
    const model = await mobilenet.load();
    setModel(model);
    next();
  };

  const identify = async () => {
    next();
    const results = await model.classify(imageRef.current);
    setResults(results);
    next();
  };

  const reset = async () => {
    setResults([]);
    next();
  };

  const upload = () => inputRef.current.click();

  const handleUpload = event => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(event.target.files[0]);
      setImageURL(url);
      next();
    }
  };

  const actionButton = {
    initial: { action: loadModel, text: 'Load Model' },
    loadingModel: { text: 'Loading Model...' },
    modelReady: { action: upload, text: 'Upload Image' },
    imageReady: { action: identify, text: 'Identify Bottle Type' },
    identifying: { text: 'Identifying...' },
    complete: { action: reset, text: 'Reset' }
  };

  const { showImage, showResults } = machine.states[appState];

  return (
    <div className="page-wrap">
      <div>
        <h1>Bottle Type Finder</h1>
        <h3>Insert Photo of Bottle to be Recycled</h3>
      </div>
      <div className="bottle-wrap">
        {showImage && <img id="bottle-img" src={imageURL} alt="upload-preview" ref={imageRef} />}
      </div>
      <input
        id="hidden"
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleUpload}
        ref={inputRef}
      />
      {showResults && (
        <ul>
          {results.map(({ className, probability }) => (
            <li className="bottle-li" key={className}>{`${className}: %${(probability * 100).toFixed(
              2
            )}`}</li>
          ))}
        </ul>
      )}
      <button className="btn" onClick={actionButton[appState].action || (() => {})}>
        {actionButton[appState].text}
      </button>
    </div>
  );
};


export default Bottles;
