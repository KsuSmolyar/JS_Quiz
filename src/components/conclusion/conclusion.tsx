import { paths } from '../../router';
import { ButtonOrLink } from '../ui/button';
import styles from './conclusion.module.css';

interface IConclusion {
  conclusionText: string | undefined;
  point: number;
  maxPoint: number;
  nextTheme: string;
  onResetLocalStorage: () => void;
}

const resultWords = ["балл", "балла", "баллов"];

export const Conclusion = ({conclusionText, point, maxPoint, nextTheme, onResetLocalStorage}: IConclusion) => {

  const getEndingOfWord = (point: number, arrWords: string[]) => {
    point = Math.abs(point) % 100;
    const num = point % 10;
    if(point > 10 && point < 20) return arrWords[2];
    if(num > 1 && num < 5) return arrWords[1];
    if(num === 1) return arrWords[0];
    return arrWords[2];
  }
  
  return (
    <div className={styles.container}>
      <p className={styles.conclusionResultText}>
        Ваш результат <span className={styles.colored}>{point}</span> {getEndingOfWord(point, resultWords)} из <span className={styles.colored}>{maxPoint}</span>!
      </p>
      <p>{conclusionText}</p>
      <ButtonOrLink onClick={onResetLocalStorage} variant='secondary' text='Перейти к следующей теме' to={'/' + paths.quiz.replace(':theme', nextTheme)}/>
    </div>
  )
}
