import styles from './header.module.css';

export const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>js quiz</h1>
      <p className={styles.headerSubTitle}>Вопросы о JavaScript, которые помогут проверить знания</p>
    </header>
  )
}
