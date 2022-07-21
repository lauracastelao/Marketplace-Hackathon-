<script setup>
import { ref } from "@vue/reactivity";
import { advertisersFactory } from "../todosSetup";
import addPictures from '../mock/all.js'

const { advertisersIncompleted, toggle } = advertisersFactory();
/* const addPicture = ref([...addPictures]);

const picturesFind = addPicture.value.forEach((t)=> {
})
 */
</script>

<template>
  <div class="card container-fluid  border-0 " style="width: 18rem">

  <!-- <img v-for="addPicture in addPictures" :key="addPicture.cover"
      :src="addPictures"
      class="card-img-top"
    > -->
    <div
      class="card-body"
      v-for="advertiser in advertisersIncompleted"
      :key="advertiser.id"
    >
      <p class="card-text">{{ advertiser.name }}</p>
      <p class="card-text">{{ advertiser.description }}</p>
      <strong>{{ advertiser.price }}</strong>
      <br />
      <button type="button" class="btn btn-secondary">Saber más...</button>
      <button class="heart" @click="toggle(advertiser.id)">❤️</button>
      <button class="nav-item">
            <RouterLink to="/contact">contact</RouterLink>
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  display: flex;
  margin-top: 12%;
  align-items: center;  
}

.heart {
  display: flex;
  justify-content: right;
  border: none;
  background-color: transparent;
}


.btn {
  display: flex;
  justify-content: center;
}
.card-body {
  padding: 20%;
  margin-bottom: 20%;
  width: 130%;
  box-shadow: 2px 2px 2px 2px rgb(138, 138, 138);
} 
</style>
