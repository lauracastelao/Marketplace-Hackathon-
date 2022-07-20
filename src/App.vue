<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header.vue';
import Footer1 from './components/Footer.vue';

</script>

<template>

   <header id="header">
    <Header/>
   </header>

  <main id="main">

  </main>

<div id="footer">

</div>


  <RouterView />
</template>

<style scoped>


</style>
