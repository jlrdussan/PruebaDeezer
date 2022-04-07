<template>
  <div class="w-full" v-if="preloaderActive">
    <div
      class="m-auto fixed inset-0 w-full z-50 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        class="m-auto bg-white rounded-lg w-40 h-16 mx-auto border-l-4 border-principal border-r-4"
      >
        <div class="lds-ellipsis flex">
          <span class="bg-red-400"></span>
          <span class="bg-blue-400"></span>
          <span class="bg-green-400"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  preloaderActive: {
    type: Boolean,
    default: false
  }
});
</script>

<style>
.lds-ellipsis {
  margin: 0 auto;
  position: relative;
  top: 50%;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 84px;
  text-align: center;
  z-index: 1;
}
.lds-ellipsis span {
  padding: 10px;
  display: inline-flex;
  margin: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  -webkit-animation: ball-pulse-sync 1s 0s infinite ease-in-out;
  animation: ball-pulse-sync 1 s 0s infinite ease-in-out;
}
.lds-ellipsis span:nth-child(1) {
  -webkit-animation: ball-pulse-sync 1s -0.14s infinite ease-in-out;
  animation: ball-pulse-sync 1s -0.14s infinite ease-in-out;
}
.lds-ellipsis span:nth-child(2) {
  -webkit-animation: ball-pulse-sync 1s -70ms infinite ease-in-out;
  animation: ball-pulse-sync 1s -70ms infinite ease-in-out;
}
@-webkit-keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
