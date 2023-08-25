import styles from './listitem.module.css';

interface IListItem {
  text: string;
}
export const ListItem = ({text}: IListItem) => {
  return (
    <li className={styles.listItem}><a href="#">{text}</a></li>
  )
}
