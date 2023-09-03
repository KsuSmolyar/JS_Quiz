import { DEFAULT_THEME } from '../../questions/quizThemes';
import { paths } from '../../router';
import { ButtonOrLink} from '../ui/button';
import styles from './basicinfosection.module.css';


export const BasicInfoSection = () => {
  return (
    <section className={styles.basicInfoSection}>
      <p className={styles.text}>
        Предлагаем вашему вниманию викторину, с помощью которой Вы сможете проверить свои знания о JavaScript.
        Вы можете приступить к прохождению заданий, начиная с первого раздела и далее следую по порядку,
        нажав на кнопку "Начать", или выбрать интересующую Вас тему в панели слева и сразу начать с выбранной части.

      </p>
      <ButtonOrLink className={styles.startButton} text="Начать" variant="secondary" to={paths.quiz.replace(':theme', DEFAULT_THEME)}/>
    </section>
  )
}
