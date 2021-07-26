<template>
  <div class="flex flex-wrap -mx-3 mb-6">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Contraseña
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-password" type="password" placeholder="******************">
  </div>
</template>

<script>
export default {
  name: 'PasswordField'
}
</script>

<style scoped>

</style>
