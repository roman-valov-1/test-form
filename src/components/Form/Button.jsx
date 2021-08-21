import React from 'react';
import styles from './CandidateForm.module.css';

const Button = (props) => {
   return (
      <div>
         <button className={styles.button}>Отправить</button>
      </div>
   )
}

export default Button;