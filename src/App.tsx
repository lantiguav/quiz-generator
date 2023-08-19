import { useState, createContext } from 'react'
import Question from '../types/question'

import Button from './components/Button'
import { v4 as uuid } from 'uuid'

import './App.css'
import { Form } from './components/Form'
import shuffleArray from './helpers/shuffleArray'
import { Results } from './components/Results'

type Context = {
  questions: Question[],
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>> | (() => {}),
}

export const DataContext = createContext<Context>({ questions: [], setQuestions: () => {}})

function App() {


  const [questions, setQuestions] = useState<Question[]>([])

  return (
    <DataContext.Provider value={{questions, setQuestions}}>
      <h1 className='text-4xl'>Quiz randomizer</h1>

      <div className='border-2 p-4 mt-4'>
        <Form />
        <hr className='my-4' />
        <Results/>
      </div>
    </DataContext.Provider>
  )
}

export default App
