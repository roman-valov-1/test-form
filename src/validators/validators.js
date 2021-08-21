export const composeValidators = (...validators) => (value) =>
   validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => (value ? undefined : 'Заполните поле');

export const onlyLetters = (value) => {
   let regexp = /\d/;
   if (value?.match(regexp)) {
      return 'Поле может содержать только буквы';
   } else {
      return undefined;
   }
}

export const emailIsValid = (value) => {
   let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (value?.match(regexp)) {
      return undefined;
   } else {
      return "Укажите электронную почту";
   }
}