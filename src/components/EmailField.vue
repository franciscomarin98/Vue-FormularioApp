<template>
  <div class="flex flex-wrap -mx-3 mb-6">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Correo
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name" type="email" placeholder="email@email.com">
  </div>
</template>

<script>
export default {
  name: 'EmailField'
}
</script>

<style scoped>

</style>
