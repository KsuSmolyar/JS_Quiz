import { quizThemes } from '../../questions/quizThemes';
import { ListItem } from '../ui/listItem/listItem';
import styles from './aside.module.css';

const themeKeys = Object.keys(quizThemes);

export const Aside = () => {
  
  return (
    <aside>
      <ol className={styles.list}>
        {themeKeys.map((themeKey, index) => {
          return <ListItem key={index} text={quizThemes[themeKey].title} theme={themeKey}/>
        })}
      </ol>
    </aside>
  )
}
