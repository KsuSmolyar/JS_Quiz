import { ListItem } from '../ui/listItem/listItem';
import styles from './aside.module.css';

const arrayOfSections = ["1. Основы JavaScript", "2. Раздел второй", "3. Раздел третий", "4. Раздел четвертый", "5. Раздел пятый", "6. Раздел шестой", "7. Раздел седьмой"]
export const Aside = () => {
  return (
    <aside>
      <ul className={styles.list}>
        {arrayOfSections.map((section, index) => {
          return <ListItem key={index} text={section}/>
        })}
      </ul>
    </aside>
  )
}
