import styles from './progressbar.module.css';

interface IProgressBar {
  solvedTasks: number;
  totalTasks: number;
}
export const ProgressBar = ({solvedTasks, totalTasks}: IProgressBar) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Прогресс {solvedTasks} из {totalTasks}</p>
    </div>
  )
}
