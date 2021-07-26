export default function useValidators () {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? 'El campo ' + fieldName + ' es requerido' : ''
  }
  const minLength = (fieldName, fieldValue, min) => {
    return fieldValue.length < min ? `El campo ${fieldName} debe tener mínimo ${min} caracteres de longitud` : ''
  }
  return {
    isEmpty,
    minLength
  }
}
