import styles from './quizpage.module.css';
import { useCallback, useMemo, useState } from 'react';
import { questionCards_1 } from '../../questions/section_1';
import { ProgressBar } from '../../components/progressBar';
import { QuestionCard } from '../../components/questionCard';
import { Conclusion } from '../../components/conclusion';

export const QuizPage = () => {
  const maxPoint = questionCards_1.length;
  const onePercent = maxPoint / 100;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  let conclusionText = '';
  const result = Math.round(counter / onePercent);

  const questionCardData = useMemo(() => {
    return questionCards_1[currentIndex];
  }, [currentIndex]);

  const onCounter = (value: number) => {
    setCounter((prev) => prev + value);
  }

  const onNextIndex = useCallback(() => {
    setCurrentIndex((prev)=> {
      if(prev < questionCards_1.length - 1) {
        return prev + 1
      }
      return -1;      
    });
  }, [])

 if(result >= 90) {
  conclusionText = ' Вы отлично разбираетесь в теме'
 } else if (result <= 70 && result > 46) {
  conclusionText = ' Вы неплохо разбираетесь в теме'
 } else if (result <= 45 && result > 26) {
  conclusionText = ' Ваши знания посредственны'
 } else if (result <= 25 && result > 15) {
  conclusionText = ' Вы неважно знаете тему'
 } else if(result <= 14) {
  conclusionText = ' Вам нужно срочно подтянуть знания'
 }

  return (
    <div className={styles.quiz}>
      <p className={styles.title}>1. Основы JavaScript</p>
      <ProgressBar solvedTasks={currentIndex < questionCards_1.length - 1 ? currentIndex : maxPoint} totalTasks={maxPoint}/>
      { currentIndex !== -1 && <QuestionCard question={questionCardData.questionText} arr={questionCardData.answerOptions} onNextClick={onNextIndex} feedbackText={questionCardData.feedbackText} counterHandler={onCounter}/>}
      { currentIndex === -1 && <Conclusion conclusionText={conclusionText} point={counter} maxPoint={maxPoint}/>}
    </div>
  )
}
