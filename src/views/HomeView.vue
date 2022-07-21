<script setup>
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";

const {todosIncompleted, todosCompleted, toggle} = todosFactory();
</script>

<template>


<Card/>
<Header/>
<Footer/>
</template>
