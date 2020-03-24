import React, { Component, useState, useEffect } from 'react'
import words from './data.json'
import alphabet from './letters.json'
import step0 from './images/step_0.png'
import step1 from './images/step_1.png'
import step2 from './images/step_2.png'
import step3 from './images/step_3.png'
import step4 from './images/step_4.png'
import step5 from './images/step_5.png'
import step6 from './images/step_6.png'
import step7 from './images/step_7.png'

const App = () => {
  // set hooks
  const [clickedLetters, setClickedLetters] = useState([])
  const [randomWord, setRandomWord] = useState('')
  const [revealedLetters, setRevealedLetters] = useState([])
  const images = [step0, step1, step2, step3, step4, step5, step6, step7]

  useEffect(() => {
    // when component renders, set a random word
    setRandomWord(words[Math.ceil(Math.random() * words.length)])
  }, [])

  const letters = randomWord.split('')

  const onLetterClicked = (e) => {
    // disable the button
    e.target.disabled = true
    const value = e.target.value
    setClickedLetters((oldLetter) => [...oldLetter, value])
    if (letters.includes(value.toLowerCase())) {
      // set revealed letters
      setRevealedLetters((oldLetter) => [...oldLetter, value])
    }
  }

  return (
    <>
      <main>
        <section className="word">
          {letters.map((letter) => {
            return (
              <div className="space">
                <div
                  className={
                    clickedLetters.includes(letter.toUpperCase())
                      ? ''
                      : 'hiddenLetter'
                  }
                  key={letter}
                >
                  {letter}
                </div>
              </div>
            )
          })}
        </section>
        <section className="buttons">
          {alphabet.map((letter) => {
            return (
              <button
                onClick={onLetterClicked}
                className="button"
                key={letter}
                value={letter}
              >
                {letter}
              </button>
            )
          })}
        </section>
        <section className="snowman">
          <img width="300" src={images[revealedLetters.length]} alt="" />
        </section>
      </main>
    </>
  )
}

export default App
