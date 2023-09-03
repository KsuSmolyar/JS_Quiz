import styles from './quizpage.module.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProgressBar } from '../../components/progressBar';
import { QuestionCard } from '../../components/questionCard';
import { Conclusion } from '../../components/conclusion';
import { useParams } from 'react-router-dom';
import { DEFAULT_THEME, quizThemes } from '../../questions/quizThemes';

const themeKeys = Object.keys(quizThemes);
console.log(themeKeys);
export const QuizPage = () => {
  const { theme } = useParams<{theme: string}>();
  const currentThemeKey = theme ? theme : DEFAULT_THEME;
  const currentTheme = quizThemes[currentThemeKey];
  const currentThemeInd = themeKeys.indexOf(currentThemeKey);
  const lastTheme = themeKeys.length - 1;
  const nextTheme = themeKeys[currentThemeInd < lastTheme ? currentThemeInd + 1 : lastTheme];
  
  const maxPoint = currentTheme.data.length;
  const onePercent = maxPoint / 100;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  let conclusionText = '';
  const result = Math.round(counter / onePercent);

  const questionCardData = useMemo(() => {
    return currentTheme.data[currentIndex];
  }, [currentIndex, currentTheme]);

  const onCounter = (value: number) => {
    setCounter((prev) => prev + value);
  }

  const onNextIndex = useCallback(() => {
    setCurrentIndex((prev)=> {
      if(prev < maxPoint - 1) {
        return prev + 1
      }
      return -1;      
    });
  }, [])

  useEffect(() => {
    setCurrentIndex(0)
  }, [theme])

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
      <p className={styles.title}>{currentTheme.title}</p>
      <ProgressBar solvedTasks={currentIndex < maxPoint - 1 ? currentIndex : maxPoint} totalTasks={maxPoint}/>
      { currentIndex !== -1 && <QuestionCard question={questionCardData.questionText} arr={questionCardData.answerOptions} onNextClick={onNextIndex} feedbackText={questionCardData.feedbackText} counterHandler={onCounter}/>}
      { currentIndex === -1 && <Conclusion nextTheme={nextTheme} conclusionText={conclusionText} point={counter} maxPoint={maxPoint}/>}
    </div>
  )
}
