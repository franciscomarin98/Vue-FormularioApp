<template>
  <div class="flex flex-wrap -mx-3 mb-6">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Correo
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name" type="email" placeholder="email@email.com" v-model="correo" @keyup="validateEmail"
      @blur="validateEmail">
    <p class="text-red-500 text-xs italic" v-if="errors.correo">{{ errors.correo }}</p>
  </div>
</template>

<script>
import useFormValidation from '../modules/useFormValidation'
import { ref } from 'vue'

export default {
  name: 'EmailField',
  setup () {
    const correo = ref('')

    const {
      errors,
      validateEmailField
    } = useFormValidation()

    const validateEmail = () => {
      validateEmailField('correo', correo.value)
    }

    return {
      validateEmail,
      errors,
      correo
    }
  }
}
</script>

<style scoped>

</style>
