<template>
  <section class="text-white bg-gray-900 body-font min-h-screen">
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-col text-center w-full mb-2">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          ¡Llámame cuanto antes!
        </h1>
        <svg
          class="w-20 h-20 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="#40BE8D"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
    </div>

    <div
      class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4"
    >
      <div class="relative sm:mb-0 flex-grow w-full">
        <label for="phone" class="leading-7 text-sm">Introduce tu teléfono</label>
        <input
          autocomplete="off"
          id="phone"
          name="phone"
          class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          v-model="phone"
          v-maska="'+593 ### ######'"
        />
      </div>
      <button
        @click="callMe"
        :class="{ 'pointer-events-none': phoneError || !phone }"
        :disabled="phoneError || !phone"
        class="bg-green-500 disabled:opacity-50 border-0 py-2 px-8 hover:bg-green-800 focus:outline-none rounded text-lg opacity-1"
      >Llámame
      </button>
    </div>

    <div
      class="lg:w-2/3 mx-auto text-red-500 underline text-md"
      v-if="phoneError"
    >
      {{ phoneError }}
    </div>

    <p class="lg:w-2/3 mx-auto leading-relaxed text-base mt-4">
      Al pulsar en el botón de llamar nos das permiso para comunicarnos
      contigo.
    </p>
  </section>
</template>

<script>
import useCallMe from '../../composables/useCallMe'

export default {
  name: 'CallMeForm',
  setup () {
    const {
      phone,
      phoneError,
      callMe
    } = useCallMe()
    return {
      phone,
      phoneError,
      callMe
    }
  }
}
</script>

<style scoped>

</style>
