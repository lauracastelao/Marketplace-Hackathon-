<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import Footer from './components/footer.vue';
// import Header from './components/Header.vue';
// import Footer1 from './components/Footer.vue';

import BootHeader from "./components/BootHeader.vue";
import Header from "./components/Header.vue";
import Cart from "./views/Cart.vue";
</script>

<template>
  <header id="header">
    <Header />
  </header>
  <div id="bootheader">
    <BootHeader />
  </div>
  <main id="main"></main>

  <div id="footer">
    <Footer />
  </div>

  <RouterView />
</template>

<style scoped></style>
