import React from 'react';
import styles from './ModalPopUp.module.css';

const ModalPopUp = ({active, setActive}) => {
   const rootClasses = [styles.modal]
   if (active) {
      rootClasses.push(styles.active)
   }

   return (
      <div className={rootClasses.join(' ')}>
         <div className={styles.modalContent}>
            <div className={styles.modalCloseButton} onClick={ () => setActive(false)}></div>
            <div className={styles.modalTitle}>Спасибо UserName!</div>
            <div className={styles.modalText}>Мы скоро свяжемся с вами</div>
            <div className={styles.button} onClick={ () => setActive(false)}>Понятно</div>
         </div>   
      </div>
   )
}

export default ModalPopUp;