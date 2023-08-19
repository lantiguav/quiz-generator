import { useState, useContext, useRef } from 'react'

import { InputText } from './InputText'
import { v4 as uuid } from 'uuid'
import Answer from '../../types/answer'
import { DataContext } from '../App'
import Button from './Button'

export const Form = () => {
  const [answerFields, setAnswerFields] = useState<Answer[]>([
    { id: uuid(), text: '', isCorrect: false },
  ])

  const { questions, setQuestions } = useContext(DataContext)
  const questionInputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: any) => {
    e.preventDefault()

    const answers: Answer[] = Array.from(e.target.elements.answers).map(
      (answer: any): Answer => {
        return {
          id: uuid(),
          text: answer.value,
          isCorrect: false,
        }
      }
    )

    setQuestions([
      ...questions,
      {
        id: uuid(),
        text: e.target.elements.question.value,
        possibleAnswers: answers,
      },
    ])

    clearForm()
  }

  const clearForm = (): void => {
    setAnswerFields([{ id: uuid(), text: '', isCorrect: false }])

    if (questionInputRef?.current) {
      questionInputRef.current.value = ''
      questionInputRef.current.focus()
    }
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
    if (!e.target.value) {
      return
    }

    setAnswerFields([
      ...answerFields,
      {
        id: uuid(),
        text: '',
        isCorrect: false,
      },
    ])
  }

  const handleAnswerBlur = (e: any) => {
    if (e.target.value || answerFields.length === 1) {
      return
    }

    console.log(e.target.id)

    setAnswerFields(answerFields.filter((answer) => answer.id !== e.target.id))
  }

  return (
    <form className='mb-4' onSubmit={handleFormSubmit}>
      <div className=''>
        <label className='block' htmlFor='question'>
          Enter a question
        </label>

        <InputText
          id='question'
          name='question'
          className='mb-4 w-full'
          placeholder='Question'
          ref={questionInputRef}
        />

        {answerFields.map((answer, i) => (
          <div className='pl-8 mb-4' key={answer.id}>
            <InputText
              id={answer.id}
              placeholder='New answer'
              name='answers'
              className='w-full'
              onChange={
                answerFields.length - 1 === i ? handleAnswerChange : () => {}
              }
              onBlur={
                answerFields.length - 1 !== i ? handleAnswerBlur : () => {}
              }
            />
          </div>
        ))}

        <Button type='submit'>Add question</Button>
      </div>
    </form>
  )
}
