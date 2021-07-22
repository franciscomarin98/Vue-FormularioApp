import { useField } from 'vee-validate'
import 'yup-phone'
import {
  string as YupString
} from 'yup'

export default function () {
  const {
    value: phone,
    errorMessage: phoneError
  } = useField(
    'phone',
    YupString()
      .phone('ES', true, 'El teléfono no tiene un formato Español')
      .required()
  )

  const callMe = () => {
    console.log(`Estamos llamando al teléfono ${phone.value}`)
  }

  return {
    phone,
    phoneError,
    callMe
  }
}
