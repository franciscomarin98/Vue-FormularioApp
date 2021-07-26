<template>
  <div class="mt-8">
    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
    <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
      Formulario de registro
    </h2>
  </div>
  <section class="mt-8" style="display: flex; justify-content: center; align-content: center">
    <form class="w-full max-w-lg">
      <NameField/>
      <EmailField/>
      <PasswordField/>
      <div class="mt-10" style="display: flex; justify-content: flex-end; align-content: flex-end">
        <button
          class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button">
          Enviar formulario
        </button>
      </div>
    </form>
  </section>

</template>

<script>
import NameField from '../NameField'
import EmailField from '../EmailField'
import PasswordField from '../PasswordField'

export default {
  name: 'FormularioBasico',
  components: {
    PasswordField,
    EmailField,
    NameField
  }
}
</script>

<style scoped>

</style>
