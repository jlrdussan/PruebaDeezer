<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex justify-end items-end w-full px-4 mt-4">
      <select v-model="$i18n.locale" class="rounded-md p-1">
        <option value="es">
          <p>{{ $t('select.spanish') }}</p>
        </option>
        <option value="en">
          <p>{{ $t('select.english') }}</p>
        </option>
      </select>
    </div>
    <div
      class="flex justify-center items-center lg:w-1/3 md:1/3 md:py-0 py-2 w-11/12 gap-2"
    >
      <div class="relative text-gray-600 focus-within:text-gray-400 w-full">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            class="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          v-model="search"
          name="search"
          class="block w-full text-gray-800 appearance-none pl-10 border rounded-xl border-secondary focus:outline-none hover:shadow-xl focus:shadow-xl hover:border-gray-300 focus:border-gray-300 py-2"
          :placeholder="$t('search')"
          autocomplete="off"
        />
      </div>
      <button
        @click="searchArtistMusic()"
        class="border rounded-lg px-3 py-0.5 bg-blue-300"
      >
        {{ $t('searchButton') }}
      </button>
    </div>
    <div
      class="grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 grid-rows-3 py-5 lg:w-9/12 w-11/12"
    >
      <div
        class="rounded-lg shadow-lg transition duration-500 ease-in-out transform scale-95 hover:scale-100 bg-white"
        v-for="(i, index) in musicArtist"
        :key="index"
      >
        <div class="rounded-md overflow-hidden flex">
          <img decoding="async" loading="lazy" :src="i.album.cover" />
          <div class="mx-3">
            <h3 class="mt-4 text-sm truncate text-gray-700">
              {{ i.title_short }}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ i.artist.name }}
            </p>
            <h3
              v-if="i.explicit_content_cover > 0"
              class="my-1 text-sm truncate text-gray-700"
            >
              {{ $t('table.Tag') }}: {{ i.explicit_content_cover }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <Preloader :preloaderActive="preloaderActive"></Preloader>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { searchArtist } from '../services/ApiDeezer';
import Preloader from '../components/Preloader.vue';

const musicArtist = ref([]);
const search = ref('');

const preloaderActive = ref(false);

const searchArtistMusic = async () => {
  musicArtist.value = [];
  preloaderActive.value = true;
  musicArtist.value = await searchArtist(search.value);
  preloaderActive.value = false;
};
</script>

<style></style>
