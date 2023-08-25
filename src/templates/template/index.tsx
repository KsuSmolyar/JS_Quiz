import { Header } from "../../components/header";
import styles from "./template.module.css";
import { Outlet } from "react-router-dom";

export const Template = () => {
  return (
    <div className={styles.template}>
      <Header/>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  )
}
