# Snowman

A snowman themed variation of a popular game, Hangman. Built with React.

# Objectives

- Reinforce component architecture in React
- Effective use props and state in React
- Use RFCs in place of RCCs

# Includes

- [REACT](https://reactjs.org/docs/getting-started.html)
- [HOOKS](https://reactjs.org/docs/hooks-intro.html)
- [FUNCTIONAL COMPONENTS](https://reactjs.org/docs/components-and-props.html)
- [STYLED COMPONENTS](https://styled-components.com/)
- [AXIOS](https://github.com/axios/axios)
- [API INTEGRATION](https://sdg-words.herokuapp.com/api/words/random)

# Requirements

- Selects a random word from the list and display a number of blank spaces (or underscores) equal to the word length
- Display a list of letters, A through Z as clickable buttons
- When the player guesses a letter (clicks the button):
- All instances of that letter are revealed at their corresponding positions in the word
- The button becomes disabled, as it has already been guessed
- Display the snowman image that corresponds with the number of letters guessed wrong
- After the word has been completed, offer the player to play again. Reset the state of the game without a page reload
- Use the SDG API to get your random word
- If the snowman is completed (counter reaches 7) before the word is completed, the player loses, and the snowman wins

# Featured Code

```JSX
const [clickedLetters, setClickedLetters] = useState([])
  const [randomWord, setRandomWord] = useState('')
  const [incorrectlyGuessedLetters, setIncorrectlyGuessedLetters] = useState([])
  const images = [step0, step1, step2, step3, step4, step5, step6, step7]

  const getRandomWord = async () => {
    const url = 'https://sdg-words.herokuapp.com/api/words/random'
    const response = await axios.get(url)
    const generatedWord = response.data.word
    setRandomWord(generatedWord)
  }

  useEffect(() => {
    // when component renders, set a random word
    getRandomWord()
  }, [])
```

# Live Site

- [LIVE SITE](https://snowman-sam.netlify.app/)
