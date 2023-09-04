import styles from './quizpage.module.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProgressBar } from '../../components/progressBar';
import { QuestionCard } from '../../components/questionCard';
import { Conclusion } from '../../components/conclusion';
import { useParams } from 'react-router-dom';
import { DEFAULT_THEME, quizThemes } from '../../questions/quizThemes';

const themeKeys = Object.keys(quizThemes);
export const QuizPage = () => {
  const { theme } = useParams<{theme: string}>();

  const currentThemeKey = theme ? theme : DEFAULT_THEME;
  const currentTheme = quizThemes[currentThemeKey];
  const currentThemeInd = themeKeys.indexOf(currentThemeKey);
  const lastTheme = themeKeys.length - 1;
  const nextTheme = themeKeys[currentThemeInd < lastTheme ? currentThemeInd + 1 : lastTheme];
  
  const maxPoint = currentTheme.data.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);

  const questionCardData = useMemo(() => {
    return currentTheme.data[currentIndex];
  }, [currentIndex, currentTheme]);

  const onCounter = (value: number) => {
    setCounter((prev) => prev + value);
  }

  const onProgress = () => {
    setProgress((prev) => prev + 1);
  }

  const onNextIndex = useCallback(() => {
    setCurrentIndex((prev)=> {
      if(prev < maxPoint - 1) {
        return prev + 1
      }
      return -1;      
    });
  }, [maxPoint])

  const onLocalStorageSaveHandler = () => {
    const themeData = {result: counter, progress: progress + 1};
    localStorage.setItem( currentTheme.title, JSON.stringify(themeData));
  }

  const onResetLocalStorageHandler = () => {
    localStorage.removeItem(currentTheme.title);
  }

  useEffect(() => {
    setCurrentIndex(0)
    setProgress(0)
  }, [theme])

 useEffect(() => {
   const initialThemeData = localStorage.getItem(currentTheme.title);
   if(initialThemeData) {
    const currentThemeData = JSON.parse(initialThemeData);
    setCounter(currentThemeData.result);
    setProgress(currentThemeData.progress);
    setCurrentIndex(currentThemeData.progress === maxPoint ? -1 : currentThemeData.progress - 1)
   }
 }, [maxPoint, currentTheme.title])

 const getResult = () => {
  const onePercent = maxPoint / 100;
  const result = Math.round(counter / onePercent);
  if(result >= 90) {
    return ' Вы отлично разбираетесь в теме'
   } else if (result <= 70 && result > 46) {
    return ' Вы неплохо разбираетесь в теме'
   } else if (result <= 45 && result > 26) {
    return ' Ваши знания посредственны'
   } else if (result <= 25 && result > 15) {
    return ' Вы неважно знаете тему'
   } else if(result <= 14) {
    return ' Вам нужно срочно подтянуть знания'
   }
 }

  return (
    <div className={styles.quiz}>
      <p className={styles.title}>Раздел № {currentThemeInd + 1}. {currentTheme.title}</p>
      <ProgressBar solvedTasks={progress} totalTasks={maxPoint}/>
      { currentIndex !== -1 && <QuestionCard index={currentIndex + 1} question={questionCardData.questionText} arr={questionCardData.answerOptions} onNextClick={onNextIndex} feedbackText={questionCardData.feedbackText} counterHandler={onCounter} onProgressHandler={onProgress} onLocalStorageSave={onLocalStorageSaveHandler}/>}
      { currentIndex === -1 && <Conclusion onResetLocalStorage={onResetLocalStorageHandler} nextTheme={nextTheme} conclusionText={getResult()} point={counter} maxPoint={maxPoint}/>}
    </div>
  )
}
