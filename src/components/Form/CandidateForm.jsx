import React, { useState } from 'react';
import InputText from './InputText';
import InputFile from './InputFile';
import InputRadio from './InputRadio';
import InputCheckbox from './InputCheckbox';
import styles from './CandidateForm.module.css';
import { Form, Field } from 'react-final-form';
import {
   composeValidators,
   required,
   onlyLetters,
   emailIsValid
} from '../../validators/validators';
import ModalPopUp from '../ModalPopUp/ModalPopUp';

const CandidateForm = (props) => {
   const [modalFormActive, setModalFormActive] = useState(false);
   const [modalPrivacyActive, setModalPrivacyActive] = useState(false);

   let onSubmit = (formData) => {
      setModalFormActive(false);
      formData.name = '';
      formData.surname = '';
      formData.email = '';
      formData.github = '';
      formData.privacyPolicy = false;
   }

   return (
      <Form
         onSubmit={onSubmit}
         render={({ handleSubmit, values }) => (
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
                     <Field
                        component={InputRadio}
                        type="radio"
                        name="gender"
                     />
                  </div>
                  <div>
                     <div className={styles.subTitle}>Github*</div>
                     <div>
                        <div className={styles.titleInput}>
                           Вставьте ссылку на Github
                        </div>
                        <Field
                           name="github"
                           component={InputText}
                           type="text"
                           placeholder="Вставьте ссылку на Github"
                        />
                     </div>
                  </div>
                  <div>
                     <Field
                        type="checkbox"
                        name="privacyPolicy"
                        component={InputCheckbox}
                        active={modalPrivacyActive}
                        setActive={setModalPrivacyActive}
                     />
                  </div>
                  <div>
                     <button
                        className={styles.button}
                        type='button'
                        disabled={(
                           values.name &&
                           values.surname &&
                           values.email &&
                           values.privacyPolicy) ? undefined : true}
                        onClick={() => setModalFormActive(true)}>Отправить</button>
                  </div>
               </div>
               <ModalPopUp active={modalFormActive}>
                  <div className={styles.modalCloseButton} onClick={() => setModalFormActive(false)}></div>
                  <div className={styles.modalTitle}>Спасибо {values.name}!</div>
                  <div className={styles.modalText}>Мы скоро свяжемся с вами </div>
                  <button type="submit" className={styles.modalButton}>Понятно</button>
               </ModalPopUp>
            </form >
         )}
      />
   )
}

export default CandidateForm;