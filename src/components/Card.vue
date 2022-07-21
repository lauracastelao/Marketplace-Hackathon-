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
  <div class="card" style="width: 18rem">

   <!--  <img v-for="addPicture in addPictures" :key="addPicture.cover"
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
.cards2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%;
}
.card {
  margin-top: 10vh;
  width: 30vh;
  height: 40vh;

}

.heart {
  display: flex;
  justify-content: right;
}

.button3 {
  display: flex;
  justify-content: center;
}

.heart {
  border: none;
  background-color: transparent;
}

.card-body {
  padding: 7vh;
  margin-bottom: 10vh;
  width: 40vh;
  box-shadow: 2px 2px 2px 2px black, 8px 8px 8px 5px ;
}

.universe {
  width: 100%;
  height: 10%;
}
</style>
