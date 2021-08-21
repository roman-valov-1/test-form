import React from 'react';
import styles from './Form.module.css';

const InputText = (props) => {
   return (
      <div>
         <input 
            className={styles.inputText} 
            type="text"
            placeholder="Name"
         />
      </div>
   )
}

export default InputText;