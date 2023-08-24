import styles from './conclusion.module.css';

interface IConclusion {
  conclusionText: string;
  point: number;
  maxPoint: number;
}
export const Conclusion = ({conclusionText, point, maxPoint}: IConclusion) => {
  return (
    <div className={styles.container}>
      <p className={styles.conclusionResultText}>Ваш результат <span className={styles.colored}>{point}</span> баллов из <span className={styles.colored}>{maxPoint}</span>!</p>
      <p>{conclusionText}</p>
    </div>
  )
}
