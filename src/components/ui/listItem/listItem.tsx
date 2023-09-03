import { Link } from 'react-router-dom';
import styles from './listitem.module.css';
import { paths } from '../../../router';

interface IListItem {
  text: string;
  theme: string;
}
export const ListItem = ({text, theme}: IListItem) => {
  return (
    <Link to={paths.quiz.replace(':theme', theme)}>
      <li className={styles.listItem}>{text}</li>
    </Link>
    
  )
}
