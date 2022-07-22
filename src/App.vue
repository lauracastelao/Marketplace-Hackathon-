<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import Footer from './components/footer.vue';

// import Footer1 from './components/Footer.vue';

import { ref } from '@vue/reactivity';
import BootHeader from './components/BootHeader.vue';

import serviceAsync from './service/servicesAsync';
import { advertisersFactory } from './todosSetup';
import Header from './components/Header.vue';

const {update} = advertisersFactory();

const isLoading = ref(true);

async function prefetch() {
  update(await serviceAsync.getAdvertiser());
  isLoading.value = false;
}

prefetch();

</script>

<template>
<h3 v-if="isLoading">Cargando los mejores Cursos...</h3>

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

<style scoped></style>
