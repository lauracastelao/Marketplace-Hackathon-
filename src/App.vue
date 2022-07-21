<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import Footer from './components/footer.vue';
// import Header from './components/Header.vue';
// import Footer1 from './components/Footer.vue';

import { ref } from '@vue/reactivity';
import BootHeader from './components/BootHeader.vue';
import Header from './components/Header.vue';
import serviceAsync from './service/servicesAsync';
import { advertisersFactory } from './todosSetup';

const {update} = advertisersFactory();

const isLoading = ref(true);

async function prefetch() {
  update(await serviceAsync.getAdvertiser());
  isLoading.value = false;
}

prefetch();

</script>

<template>
<h3 v-if="isLoading">Loading...</h3>

<template v-if="!isLoading"> 
<header id="header">
  <Header/>
   </header>
    <div id="bootheader">
   <BootHeader/>
   </div> 
  <main id="main">

  </main>

 <div id="footer">
<Footer/>
</div> 


  <RouterView />
</template>
   
</template>

<style scoped>


</style>
