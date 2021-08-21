import React from 'react';
import styles from './Form.module.css';

const InputCheckbox = (props) => {
   return (
      <div className={styles.inputCheckboxItem}>
         <input type="checkbox" id="agree" className={styles.inputCheckbox}/>
         <label htmlFor="agree" className={styles.inputCheckboxLabel}>
            * Я согласен с политикой конфиденциальности
         </label>
      </div>
   )
}

export default InputCheckbox;