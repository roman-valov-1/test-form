import React from 'react';
import styles from './InputText.module.css';

const InputText = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
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