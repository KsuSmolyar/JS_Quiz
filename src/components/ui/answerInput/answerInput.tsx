import React, { InputHTMLAttributes } from 'react';
import styles from './answerinput.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  value: "1" | "0";
  text: string;
  onChecked: (value: string) => void;
}
export const AnswerInput = React.memo<InputProps>(({id, name, value, text, onChecked, ...props}) => {
  const changeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChecked(event.target.value);
  }

  return (
    <div className={styles.answerInputContainer}>
        <input onChange={changeRadio} className={styles.answerInput} type="radio" id={id} name={name} value={value}  {...props}/>
        <label className={styles.answerInputLabel} htmlFor={id}>{text}</label>
    </div>
  )
})
