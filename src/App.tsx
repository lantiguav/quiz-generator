import { useState, createContext } from 'react'
import Question from '../types/question'

import './App.css'
import { Form } from './components/Form'
import { Results } from './components/Results'

type Context = {
  questions: Question[]
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>> | (() => {})
}

export const DataContext = createContext<Context>({
  questions: [],
  setQuestions: () => {},
})

function App() {
  const [questions, setQuestions] = useState<Question[]>([])

  return (
    <DataContext.Provider value={{ questions, setQuestions }}>
      <h1 className='text-4xl'>Quiz randomizer</h1>

      <div className='border-2 p-4 mt-4'>
        <Form />
        <Results />
      </div>
    </DataContext.Provider>
  )
}

export default App
