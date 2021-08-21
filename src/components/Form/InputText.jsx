import React from 'react';
import styles from './CandidateForm.module.css';

const InputText = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   console.log(input);
   return (
      <div className={styles.containerInputText}>
         <input 
            className={hasError ? styles.inputTextError : styles.inputText}
            {...input} 
            {...props}
         />
         {hasError && <div className={styles.errorMessage}>{meta.error}</div>}
      </div>
   )
}

export default InputText;