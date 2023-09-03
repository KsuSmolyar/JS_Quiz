import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <Link title='перейти на главную' className={styles.headerLink} to={'/'}>js quiz</Link></h1>
      <p className={styles.headerSubTitle}>Вопросы о JavaScript, которые помогут проверить знания</p>
    </header>
  )
}
