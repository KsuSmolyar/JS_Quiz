import classNames from 'classnames';
import styles from './progressbar.module.css';

interface IProgressBar {
  solvedTasks: number;
  totalTasks: number;
}
export const ProgressBar = ({solvedTasks, totalTasks}: IProgressBar) => {
  const progressItems = Array.from({length: totalTasks}); 
  return (
    <div className={styles.container}>
      <p className={styles.text}>Прогресс {solvedTasks} из {totalTasks}</p>
      <ul className={styles.progressList}>
        {progressItems.map((progressItem, index) => {
          return (<li key={index} className={classNames(styles.progressListItem, {
            [styles.solved]: index + 1 <= solvedTasks
          })}></li>)
        })}
      </ul>
    </div>
  )
}
