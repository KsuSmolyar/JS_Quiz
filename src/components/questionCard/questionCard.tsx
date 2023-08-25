import React, { useRef, useState } from 'react';
import { AnswerInput } from '../ui/answerInput';
import { ButtonOrLink } from '../ui/button';
import styles from './questioncard.module.css';
import { AnswerOption } from '../../questions/types';

interface IQuestionCard {
  question: string;
  arr: AnswerOption[];
  onNextClick: () => void
  feedbackText: string;
  counterHandler: (value: number) => void;
}
export const QuestionCard = React.memo(({question, arr, onNextClick, feedbackText, counterHandler}: IQuestionCard) => {
  const [show, setShow] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [disabledRadio, setDisabledRadio] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const onOpenHandler = () => {
    setShow(true);
    setDisabled(true);
    setDisabledRadio(true);
  }

  const onNextClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShow(false);
    setShowFeedback(false);
    setDisabledRadio(false);
    formRef.current?.reset();
    onNextClick();
  }

  const onCheckedHandler = (val: string) => {
    setShowFeedback(val === "0")
    setDisabled(false);
    counterHandler(+val);
  }
  
  return (
    <form ref ={formRef} className={styles.container} onSubmit={onNextClickHandler}>
      <div className={styles.questionCard}>
        <p className={styles.questionCardText}>{question}</p>
        <div className={styles.answerOption}>
          {arr.map((item) => (
            <AnswerInput key={item.id} id={item.id} name={item.name} value={item.value} text={item.text} onChecked={onCheckedHandler} disabled={disabledRadio}/>
          ))}
        </div>
        <ButtonOrLink onClick={onOpenHandler} className={styles.answerButton} text="Ответить" disabled={disabled}/>
      </div>
    {show && <div className={styles.feedbackBlock}>
      <p className={styles.feedbackTitle}>{showFeedback ? 'Ответ неверный!' : 'Ответ верный!'}</p>
      <ButtonOrLink type="submit" className={styles.nextButton} text="Следующий вопрос" variant="secondary"/>
      {showFeedback && <p className={styles.feedbackText}> {feedbackText}</p>}

    </div>}
    </form>
  )
})
