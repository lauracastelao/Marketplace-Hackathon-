<script setup>
import {advertisersFactory} from '../todosSetup'
const {advertisersCompleted, deleteAdvertiser} = advertisersFactory();
</script>

<template>
  <!-- <h3>Favoritos</h3>
  <div class="grid">
    <div class="box" v-for="advertiser in advertisersCompleted" :key="advertiser.id" @click="toggle(advertiser.id)">
      <button  @click="toggle(advertiser.id)"></button>
     <p>{{ advertiser.name }}</p>
      <p>{{ advertiser.description }}</p>
      <p>{{ advertiser.duration }}</p>
      <p>{{ advertiser.price }}</p>
      <p>{{ advertiser.modality }}</p>
      <p>{{ advertiser.formador }}</p>
      <p>{{ advertiser.coformador }}</p>
      <p>{{ advertiser.location }}</p>
      <img :src="advertisers">
      <button class="delete" @click="deleteAdvertiser(advertiser.id)">Delete</button>
    </div>
  </div> -->

  <div class="card" style="width: 18rem">
    <img
      src="https://miro.medium.com/max/1200/1*XpExcSt-d8XdnkIT3bcutg.jpeg"
      class="card-img-top"
      alt="..."
    />
    <div
      class="card-body"
      v-for="advertiser in advertisersCompleted"
      :key="advertiser.id"
    >
      <p class="card-text">{{ advertiser.name }}</p>
      <p class="card-text">{{ advertiser.description }}</p>
      <strong>{{ advertiser.price }}</strong>
      <br />
      <button type="button" class="btn btn-secondary">Saber más...</button>
      <button class="heart" @click="deleteAdvertiser(advertiser.id)">❌</button>
    </div>
  </div>
</template>

<style  scoped>
@import '../assets/card.css';
</style> 