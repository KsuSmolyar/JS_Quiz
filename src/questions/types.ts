export type QuestionCard = {
  questionText: string,
  answerOptions: AnswerOption[],
  feedbackText: string
}

export type AnswerOption = {
  id: string,
  name: string,
  value: "1" | "0",
  text: string,
}

export type QuizThemes = {
  [key: string]: {
    title: string,
    data: QuestionCard[]
  }
}
