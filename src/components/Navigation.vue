<template>
  <header class="text-gray-400 bg-gray-900 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl">Vue 3 Forms</span>
      </a>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700flex flex-wrap items-center text-base justify-center"
      >
        <router-link
          to="/forms/call-me"
          active-class="underline text-white"
          class="mr-5 hover:text-white"
        >Llámame</router-link
        >
        <router-link
          to="/forms/strong-password"
          active-class="underline text-white"
          class="mr-5 hover:text-white"
        >Fortaleza contraseña</router-link
        >
        <router-link
          to="/forms/dependent-fields"
          active-class="underline text-white"
          class="mr-5 hover:text-white"
        >Formulario dependiente</router-link
        >
        <router-link
          to="/forms/credit-card"
          active-class="underline text-white"
          class="mr-5 hover:text-white"
        >Pago con tarjeta</router-link
        >
        <router-link
          to="/forms/wizard"
          active-class="underline text-white"
          class="mr-5 hover:text-white"
        >Wizard</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
