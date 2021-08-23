import React from 'react';
import styles from './CandidateForm.module.css';

const InputCheckbox = ({input, ...props}) => {

   return (
      <div className={styles.inputCheckboxItem}>
         <input  
            id="checkbox" 
            className={styles.inputCheckbox}
            {...input} 
            {...props}
            value="agree"
         />
         <div className={styles.inputCheckboxDescription}>
            * Я согласен с <span>политикой конфиденциальности</span>
         </div>
      </div>
   )
}

export default InputCheckbox;