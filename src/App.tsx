import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { questions } from './data';
import $ from 'jquery'

function App() {
  const [start, setStart] = useState<boolean>(false)
  const numberOfQuestions = questions.length

  function getRandomElement<T>(array: T[]): T | undefined {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const handleCheckCorrect = (answers: string, correct: number, index: number, e: any, item: any) => {
    const ans = $('.ans-' + index)
    const a = $('.' + item.options[correct - 1].split(')')[0] + '-' + index)
    if (ans && a) {
      ans.css('color', 'white')
      a.css('color', 'green')
      a.css('font-weight', 'bold')
      if (answers === item.options[correct - 1]) {
        ans.css('background-color', 'green')
      } else {
        ans.css('background-color', 'red')
        e.target.style.color = "red"
      }
    }
  }

  return (
    <div className="App" style={{ display: 'flex' }}>
      <section style={{ width: '60%', padding: '60px 0' }}>
        {start ? <div className='full-test' style={{ height: `${window.innerHeight}px`, overflowY: 'auto' }}>
          {questions.map((item, index) => {
            return (
              <div style={{ textAlign: 'start', paddingLeft: '30px', marginTop: '20px' }}>
                <h3 className='question'>{index + '. ' + item.question}</h3>
                <p className={`a-${index}`} onClick={(e) => handleCheckCorrect(item.options[0], item.correctAnswer, index, e, item)} style={{ cursor: 'pointer' }}>{item.options[0]}</p>
                <p className={`b-${index}`} onClick={(e) => handleCheckCorrect(item.options[1], item.correctAnswer, index, e, item)} style={{ cursor: 'pointer' }}>{item.options[1]}</p>
                <p className={`c-${index}`} onClick={(e) => handleCheckCorrect(item.options[2], item.correctAnswer, index, e, item)} style={{ cursor: 'pointer' }}>{item.options[2]}</p>
                <p className={`d-${index}`} onClick={(e) => handleCheckCorrect(item.options[3], item.correctAnswer, index, e, item)} style={{ cursor: 'pointer' }}>{item.options[3]}</p>
              </div>
            )
          })}
        </div> : <button onClick={() => setStart(true)}>Bắt Đầu Kiểm Tra</button>}
      </section>
      <section style={{ width: '40%' }}>
        <h4>Answers</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '40px' }}>
          {questions.map((item, index) => {
            return (
              <div className={`ans-${index}`} style={{ height: '30px', margin: '3px', width: '30px', borderRadius: '5px', border: '1px solid #999' }}>
                {index + 1}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
