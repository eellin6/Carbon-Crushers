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

const Bottles = ({func2}: any) => {
  const [results, setResults] = useState([]);
  const [noBottle, setNoBottle] = useState('');
  const [imageURL, setImageURL] = useState(null);
  const [model, setModel] = useState(null);
  const [answers, setAnswers] = useState('');
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
    try {

      const results = await model.classify(imageRef.current);
      await setResults(results);
      await resultCheck(results);
      next();
    } catch (error) {
      console.info('ERROR', error);
    }
  };

  const resultCheck = (results) => {
    console.info(results);

    if (results[0].className === 'pop bottle, soda bottle') {
      setAnswers('Soda Bottle');
      func2();
    } else if (results[0].className === 'wine bottle') {
      setAnswers('fancy Wine Bottle');
      func2();
    } else if (results[0].className === 'whiskey jug' || results[0].className === 'cocktail shaker') {
      setAnswers('Liquor Bottle');
      func2();
    } else if (results[0].className === 'beer bottle') {
      setAnswers('Beer Bottle');
      func2();

    } else {
      setNoBottle('I know a bottle when I see one... And this ain\'t no bottle!');
    }
  };

  const reset = async () => {
    setResults([]);
    next();
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
    initial: { action: loadModel, text: 'Initiate Photo Upload' },
    loadingModel: { text: 'Loading Model...' },
    modelReady: { action: upload, text: 'Get Image' },
    imageReady: { action: identify, text: 'Identify Bottle Type' },
    identifying: { text: 'Identifying...' },
    complete: { action: reset, text: 'Reset' }
  };

  const { showImage, showResults } = machine.states[appState];

  return (
    <div>
      <div>
        <h1>Want Extra Points?</h1>
        <h3>Prove it! Insert Photo of Bottle to be Recycled for 50% Increased Per Bottle </h3>
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
          <li>
            <div> {
              noBottle ? noBottle : `Well done! You are recycling a ${answers}!`
            }
            </div>
          </li>
        </ul>
      )}
      <button className="btn" onClick={actionButton[appState].action || (() => {})}>
        {actionButton[appState].text}
      </button>
    </div>
  );
};


export default Bottles;
