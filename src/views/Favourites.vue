<script setup>
import {advertisersFactory} from '../todosSetup'
import Pop from '../components/CardPop.vue'
const {advertisersCompleted, deleteAdvertiser} = advertisersFactory();
</script>

<template>
  <h3>Favoritos</h3>

  <p v-if="advertisersCompleted.length === 0"><a>No tienes favoritos agregados</a></p>


  <div class="card" style="width: 18rem">
  
    <div
      class="card-body"
      v-for="advertiser in advertisersCompleted"
      :key="advertiser.id"
    >
      <img
      src="https://miro.medium.com/max/1200/1*XpExcSt-d8XdnkIT3bcutg.jpeg"
      class="card-img-top"
      alt="..."
    />
     <p class="card-text"><strong>{{ advertiser.name }} </strong></p> 
      <p class="card-text">{{ advertiser.description }}</p>
      <strong>{{ advertiser.price }}</strong>
      <br />
      <button type="button" class="btn btn-secondary">Saber más...</button>
      <button class="heart" @click="deleteAdvertiser(advertiser.id)">❌</button>
    </div>
  </div>
 
</template>

<style lang="css" scoped>

.card {
  display: flex;
  margin-top: 4%;
  align-items: center;
}

.heart {
  display: flex;
  justify-content: flex-end;
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
  border:none;
}

.images {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.buttons {
  display: flex;

  height: 4vh;
}

button {
  color:white;
  font-size:small;
}

div{
  margin:auto;
}

h3, p {
  text-align: center;
  margin-top: 2rem;
}
</style> 