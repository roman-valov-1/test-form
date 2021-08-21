import React from 'react';
import InputText from './InputText';
import InputFile from './InputFile';
import Button from './Button';
import InputRadio from './InputRadio';
import InputCheckbox from './InputCheckbox';
import styles from './Form.module.css';

const Form = (props) => {
   return (
      <form>
         <div>
            <div>
               <div className={styles.subTitle}>Личные данные</div>
               <div className={styles.flexContainer}>
                  <div className={styles.inputContainer}>
                     <div className={styles.titleInput}>
                        Имя*
                     </div>
                     <InputText />
                  </div>
                  <div className={styles.inputContainer}>
                     <div className={styles.titleInput}>
                        Фамилия*
                     </div>
                     <InputText />
                  </div>
               </div>
               <div className={styles.flexContainer}>
                  <div className={styles.inputContainer}>
                     <div className={styles.titleInput}>
                        Электронная почта*
                     </div>
                     <InputText />
                  </div>
                  <div className={styles.inputContainer}>
                     <InputFile />
                  </div>  
               </div>
            </div>
            <div>
               <div className={styles.subTitle}>Пол*</div>
               <InputRadio />
            </div>
            <div>
               <div className={styles.subTitle}>Github*</div>
               <div>
                  <div className={styles.titleInput}>
                     Вставьте ссылку на Github
                  </div>
                  <InputText />
               </div>
            </div>
            <div>
               <InputCheckbox />
            </div>
            <Button />
         </div>
      </form>
   )
}

export default Form;