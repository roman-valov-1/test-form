import React from 'react';
import styles from './CandidateForm.module.css';

const InputFile = (props) => {
   return (
      <div>
         <input type="file" id="inputFile" className={styles.inputFile}/>
         <label htmlFor="inputFile" className={styles.inputFileLabel}>
            Загрузить резюме
         </label>
      </div>
   )
}

export default InputFile;