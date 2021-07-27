import { reactive } from 'vue'
import useValidators from './validators'

const errors = reactive({})

export default function useFormValidation () {
  const {
    isEmpty,
    minLength,
    isEmail,
    isSecurePassword
  } = useValidators()

  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 4)
  }

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue)
  }

  const validatePasswordField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isSecurePassword(fieldName, fieldValue)
  }
  return {
    errors,
    validateNameField,
    validateEmailField,
    validatePasswordField
  }
}
