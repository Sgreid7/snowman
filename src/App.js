import React, { Component, useState, useEffect } from 'react'
import words from './data.json'
import alphabet from './letters.json'

const App = () => {
  // set hooks
  const [clickedLetters, setClickedLetters] = useState([])
  const [randomWord, setRandomWord] = useState('')
  const [revealedLetters, setRevealedLetters] = useState([])

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
      </main>
    </>
  )
}

export default App
