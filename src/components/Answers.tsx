import React, { useState } from 'react'

type AnswersProps = {
  answer: string
  getUserAnswer: (ans: string) => void
  clickedClass: string
}

const Answers = ({ answer, getUserAnswer, clickedClass }: AnswersProps) => {
  // const [isClicked, setIsClicked] = useState<boolean>(false)

  return (
    <div
      className={`button ${clickedClass}`}
      onClick={() => {
        getUserAnswer(answer)
      }}
    >
      {answer}
    </div>
  )
}

export default Answers