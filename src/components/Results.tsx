import { useContext } from 'react'
import { DataContext } from '../App'
import Button from './Button'
import shuffleArray from '../helpers/shuffleArray'
import Question from '../../types/question'

export const Results = () => {
  const { questions, setQuestions } = useContext(DataContext)

  const handleRandomizeClick = () => {
    const shuffledQuestions: Question[] = shuffleArray(questions)

    shuffledQuestions.forEach((question) => {
      question.possibleAnswers = shuffleArray(question.possibleAnswers)
    })

    setQuestions(shuffledQuestions)
  }

  return (
    <>
      {questions.length > 0 && <hr className='my-4' />}
      {questions.map((question) => (
        <div key={question.id} className='mb-4'>
          <h2 className='text-xl'>{question.text}</h2>
          <ol className='list-[lower-alpha] list-inside'>
            {question.possibleAnswers.map(
              (answer) => answer.text && <li key={answer.id}>{answer.text}</li>
            )}
          </ol>
        </div>
      ))}

      {questions.length > 1 && (
        <Button onClick={handleRandomizeClick}>Randomize</Button>
      )}
    </>
  )
}
