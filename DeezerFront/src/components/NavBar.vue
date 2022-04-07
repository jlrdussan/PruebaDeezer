<template>
  <nav
    class="px-2 sm:px-4 py-2 bg-secondary border-b-2 border-primary bg-blue-400"
  >
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex text-primary">
        <img src="../assets/logoD.png" class="w-14 h-12 right-0" />
      </a>
      <div class="justify-between items-center flex w-auto">
        <router-link to="/">
          <a
            class="block py-2 pr-4 pl-3 text-primary hover:text-quinary font-bold rounded md:bg-transparent md:p-0"
            >{{ $t('title') }}
          </a>
        </router-link>
      </div>
      <div class="flex items-center">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>
