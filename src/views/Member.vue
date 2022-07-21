<script setup>


import { advertisersFactory } from "../todosSetup";
const {add} = advertisersFactory();
const addAndNavigate = (name,description) => {
    add(name),
    add(description)
   
  
}
</script>

<template>
<div class="container">
      <label for="new-task">New Member's</label>
      <input id="new-task" type="text" v-model="name">
       <input id="new-task" type="text" v-model="description"> 
      <button type="add" @click="addAndNavigate(name, description)">Add</button>
  </div>

</template>

<style lang="css" scoped>

</style>