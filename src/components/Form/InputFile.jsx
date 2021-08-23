import React, {useState} from 'react';
import styles from './InputFile.module.css';

const InputFile = ({fileInputRef, fileInput, setFileInput, input, ...props}) => {
   const [visibleInputFile, setVisibleInputFile] = useState(false);

   const inputFileClasses = [styles.inputFile]
   if (visibleInputFile) {
      inputFileClasses.push(styles.active)
   }
   const inputFileLabelClasses = [styles.inputFileLabel]
   if (visibleInputFile) {
      inputFileLabelClasses.push(styles.hidden)
   }

   return (
      <div>
         <input 
            id="inputFile" 
            className={inputFileClasses.join(' ')}
            {...input}
            {...props}
            value={fileInput}
            onChange={ (e) => setFileInput(e.target.files[0])}
            ref={fileInputRef}
         />
         <label 
            htmlFor="inputFile" 
            className={inputFileLabelClasses.join(' ')}
            onClick={ () => setVisibleInputFile(true)}
            >
            Загрузить резюме
         </label>
      </div>
   )
}

export default InputFile;