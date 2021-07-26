<template>
  <div class="flex flex-wrap -mx-3 mb-6">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Nombres
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
      id="grid-first-name" type="text" placeholder="Jane Doe">
    <p class="text-red-500 text-xs italic">Complete el campo</p>
  </div>
</template>

<script>
export default {
  name: 'NameField'
}
</script>

<style scoped>

</style>
