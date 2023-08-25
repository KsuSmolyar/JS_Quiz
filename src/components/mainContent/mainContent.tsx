import { Aside } from '../aside';
import { BasicInfoSection } from '../basicInfoSection';
import styles from './maincontent.module.css';

export const MainContent = () => {



  return (
    <div className={styles.mainContent}>
      <Aside/>
      <BasicInfoSection />
    </div>
  )
}
