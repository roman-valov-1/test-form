import React from 'react';
import styles from './CandidateForm.module.css';

const InputRadio = (props) => {
   return (
      <div className={styles.containerInputRadio}>
         <div className={styles.inputRadioItem}>
            <input
               className={styles.inputRadio} 
               type="radio" 
               id="man" 
               name="gender"
               value="man"
               defaultChecked
            />
            <label htmlFor="man" className={styles.inputRadioLabel}>Мужчина</label>
         </div>
         <div className={styles.inputRadioItem}>
            <input
               className={styles.inputRadio} 
               type="radio" 
               id="woman" 
               name="gender" 
               value="woman"
            />
            <label htmlFor="woman" className={styles.inputRadioLabel}>Женщина</label>
         </div>
      </div>
   )
}

export default InputRadio;