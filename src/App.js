import React, { Component, useState, useEffect } from 'react'
import Header from './components/Header'
import words from './data.json'
import alphabet from './letters.json'
import styled from 'styled-components'
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

  const onResetGame = (e) => {
    setClickedLetters((oldLetter) => [])
    setRevealedLetters((oldLetter) => [])
    setRandomWord(words[Math.ceil(Math.random() * words.length)])
  }

  return (
    <>
      <MainContent>
        <Header text="Snowman - A holiday-style Hangman" />
        <RandomWord className="word">
          {letters.map((letter) => {
            return (
              <Underline>
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
              </Underline>
            )
          })}
        </RandomWord>
        <Buttons>
          {alphabet.map((letter) => {
            return (
              <Button
                onClick={onLetterClicked}
                className="button"
                disabled={
                  clickedLetters.includes(letter.toUpperCase()) ? true : false
                }
                key={letter}
                value={letter}
              >
                {letter}
              </Button>
            )
          })}
        </Buttons>
        <button onClick={onResetGame}>RESET</button>
      </MainContent>
      <SnowmanSection>
        <img width="300" src={images[revealedLetters.length]} alt="" />
      </SnowmanSection>
    </>
  )
}

export default App
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RandomWord = styled.section`
  display: flex;
  /* height: 8rem; */
`
const Underline = styled.div`
  border-bottom: 0.5rem solid #000;
  margin: 5rem 1rem;
  width: 1.5rem;
  text-align: center;
`
const Buttons = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

const Button = styled.button`
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.2rem 0.6rem;
  border: 0.1rem solid #61dafb;
  color: #61dafb;
  background: #fff;
  transition: 0.3s ease;
  :hover {
    cursor: pointer;
    border: 0.1rem solid #fff;
    color: #fff;
    background: #61dafb;
    transform: translateY(-0.5rem);
    box-shadow: 0 0.1rem 0.2rem #111;
  }
  :disabled {
    color: #000;
  }
`

const SnowmanSection = styled.section`
  display: flex;
  align-items: flex-end;
`
