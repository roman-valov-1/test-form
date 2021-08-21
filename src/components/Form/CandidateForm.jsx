import React from 'react';
import InputText from './InputText';
import InputFile from './InputFile';
import Button from './Button';
import InputRadio from './InputRadio';
import InputCheckbox from './InputCheckbox';
import styles from './CandidateForm.module.css';
import { Form, Field } from 'react-final-form';
import { composeValidators, 
         required, 
         onlyLetters, 
         emailIsValid } from '../../validators/validators';

const CandidateForm = (props) => {
   return (
      <Form
         onSubmit={props.onSubmit}
         render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
               <div>
                  <div>
                     <div className={styles.subTitle}>Личные данные</div>
                     <div className={styles.flexContainer}>
                        <div className={styles.inputContainer}>
                           <div className={styles.titleInput}>
                              Имя*
                           </div>
                           <Field 
                              name="name" 
                              component={InputText} 
                              type="text"
                              placeholder="Имя"
                              validate={composeValidators(required, onlyLetters)}
                           />
                        </div>
                        <div className={styles.inputContainer}>
                           <div className={styles.titleInput}>
                              Фамилия*
                           </div>
                           <Field 
                              name="surname" 
                              component={InputText} 
                              type="text"
                              placeholder="Фамилия"
                              validate={composeValidators(required, onlyLetters)}
                           />
                        </div>
                     </div>
                     <div className={styles.flexContainer}>
                        <div className={styles.inputContainer}>
                           <div className={styles.titleInput}>
                              Электронная почта*
                           </div>
                           <Field 
                              name="email" 
                              component={InputText} 
                              type="email"
                              placeholder="Электронная почта"
                              validate={composeValidators(required, emailIsValid)}
                           />
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
                        <Field 
                           name="text" 
                           component={InputText} 
                           type="text"
                           placeholder="Электронная почта"
                           validate={required}
                        />
                     </div>
                  </div>
                  <div>
                     <InputCheckbox />
                  </div>
                  <Button />
               </div>
            </form>
         )}
      />
   )
}

export default CandidateForm;