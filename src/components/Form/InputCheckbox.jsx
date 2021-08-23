import React from 'react';
import ModalPopUp from '../ModalPopUp/ModalPopUp';
import styles from './CandidateForm.module.css';

const InputCheckbox = ({ input, active, setActive }) => {

   return (
      <div className={styles.inputCheckboxItem}>
         <input
            id="checkbox"
            className={styles.inputCheckbox}
            {...input}
            value="agree"
         />
         <div className={styles.inputCheckboxDescription}>
            * Я согласен с <span onClick={() => setActive(true)}>политикой конфиденциальности</span>
         </div>
         <ModalPopUp active={active}>
            <div className={styles.modalCloseButton} onClick={() => setActive(false)}></div>
            <div className={styles.modalTitle}>
               Политика конфиденциальности
            </div>
            <div className={styles.modalText}>
               <strong>1. Общие положения</strong>
               <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Михайловым Иваном Сергеевичем (далее – Оператор).</p>
               <p>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
               <p>1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта httpsː//thismywebsite·com.</p>

               <strong>2. Основные понятия, используемые в Политике</strong>
               <p>2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;</p>
               <p>2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</p>
               <p>2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу httpsː//thismywebsite·com;</p>
            </div>
            <div className={styles.modalButton} onClick={() => setActive(false)}>Понятно</div>
         </ModalPopUp>
      </div>
   )
}

export default InputCheckbox;