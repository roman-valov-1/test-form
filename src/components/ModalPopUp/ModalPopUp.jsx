import React from 'react';
import styles from './ModalPopUp.module.css';

const ModalPopUp = ({active, children}) => {
   const rootClasses = [styles.modal]
   if (active) {
      rootClasses.push(styles.active)
   }

   return (
      <div className={rootClasses.join(' ')}>
         <div className={styles.modalContent}>
            {children}
         </div>   
      </div>
   )
}

export default ModalPopUp;