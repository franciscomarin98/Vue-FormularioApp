import { reactive } from 'vue'
import useValidators from './validators'

const errors = reactive({})

export default function useFormValidation () {
  const {
    isEmpty,
    minLength
  } = useValidators()
  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 4)
  }
  return {
    errors,
    validateNameField
  }
}
