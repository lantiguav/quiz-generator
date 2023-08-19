import Answer from './answer'

type Question = {
  id: string
  text: string
  possibleAnswers: Answer[]
}

export default Question
