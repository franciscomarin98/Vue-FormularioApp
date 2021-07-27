export default function useValidators () {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? 'El campo ' + fieldName + ' es requerido' : ''
  }

  const minLength = (fieldName, fieldValue, min) => {
    return fieldValue.length < min ? `El campo ${fieldName} debe tener mínimo ${min} caracteres de longitud` : ''
  }

  const isEmail = (fieldName, fieldValue) => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !regExp.test(fieldValue) ? `El correo "${fieldValue}" no posee un formato correcto` : ''
  }

  return {
    isEmpty,
    minLength,
    isEmail
  }
}
