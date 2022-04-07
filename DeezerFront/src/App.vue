<template>
  <div>
    <Layout></Layout>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script setup>
import Layout from './layouts/Layout.vue';
import Footer from './components/Footer.vue';
</script>
<style></style>
