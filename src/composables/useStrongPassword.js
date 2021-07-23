import {
  ref, watch, computed, reactive, toRefs
} from 'vue'
import { useField, useForm } from 'vee-validate'
import {
  addMethod,
  object as yupObject,
  string as yupString,
  ref as yupRef
} from 'yup'
import zxcvbn from 'zxcvbn'

export default function () {
  const minScore = 4
  const score = ref(0)
  const state = reactive({
    scoreMeter: 'Muy débil',
    styleMeter: 'w-1 bg-red-500'
  })

  addMethod(yupString, 'strongPassword', function () {
    return this.test('test-strong', function (password) {
      const { createError } = this
      if (!password) {
        return createError({
          // eslint-disable-next-line no-template-curly-in-string
          message: 'El campo ${path} es requerido'
        })
      }

      score.value = zxcvbn(password).score
      if (score.value < minScore) {
        return createError({
          message: 'La fortaleza de la contraseña no es suficiente'
        })
      }

      return true
    })
  })

  const schema = yupObject()
    .shape({
      password: yupString()
        .strongPassword(),
      password_confirmation: yupString()
        .oneOf([yupRef('password'), null, 'Las contraseñas deben coincidir'])
        .required('La confirmacion de contraseña es requerida')
    })

  const form = useForm({
    validationSchema: schema
  })

  const {
    value: password,
    errorMessage: passwordError
  } = useField('password')
  const {
    value: passwordConfirmation,
    errorMessage: passwordConfirmationError
  } = useField('password_confirmation')

  const isValid = computed(() => minScore <= score.value && form.meta.value.valid)

  const submit = () => {
    console.log(form.values)
  }

  watch(score, (val) => {
    state.scoreMeter = [
      'Muy débil', // score 0
      'Débil', // score 1
      'Moderado', // score 2
      'Fuerte', // score 3
      'Muy Fuerte' // score 4
    ][val]

    state.stylesMeter = [
      'w-1 bg-red-500', // score 0
      'w-1/4 bg-yellow-500', // score 1
      'w-2/4 bg-yellow-300', // score 2
      'w-3/4 bg-green-500', // score 3
      'w-full bg-blue-500' // score 4
    ][val]
  })

  return {
    ...toRefs(state),
    password,
    passwordError,
    passwordConfirmation,
    passwordConfirmationError,
    isValid,
    submit
  }
}
