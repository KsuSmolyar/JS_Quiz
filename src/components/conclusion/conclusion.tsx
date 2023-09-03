import { paths } from '../../router';
import { ButtonOrLink } from '../ui/button';
import styles from './conclusion.module.css';

interface IConclusion {
  conclusionText: string;
  point: number;
  maxPoint: number;
  nextTheme: string;
}

export const Conclusion = ({conclusionText, point, maxPoint, nextTheme}: IConclusion) => {
  return (
    <div className={styles.container}>
      <p className={styles.conclusionResultText}>
        Ваш результат <span className={styles.colored}>{point}</span> баллов из <span className={styles.colored}>{maxPoint}</span>!
      </p>
      <p>{conclusionText}</p>
      <ButtonOrLink variant='secondary' text='Перейти к следующей теме' to={'/' + paths.quiz.replace(':theme', nextTheme)}/>
    </div>
  )
}
