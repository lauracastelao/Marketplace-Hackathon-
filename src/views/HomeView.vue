<script setup>

import { advertisersFactory } from "../todosSetup";
const { advertisersIncompleted, toggle } = advertisersFactory();
</script>

<template>
  <h3>Cursos</h3>

  <div class="grid">
    <div
      class="box"
      v-for="advertiser in advertisersIncompleted"
      :key="advertiser.id"
    >
      <button @click="toggle(advertiser.id)">
        <a>
          <img
            class="icon-favorite"
            src="../assets/img/fa-heart.svg"
            alt="favorite"
          />
        </a>
      </button>
      <p>{{ advertiser.name }}</p>
      <p>{{ advertiser.description }}</p>
      <p>{{ advertiser.duration }}</p>
      <p>{{ advertiser.price }}</p>
      <p>{{ advertiser.modality }}</p>
      <p>{{ advertiser.formador }}</p>
      <p>{{ advertiser.coformador }}</p>
      <p>{{ advertiser.location }}</p>
      <img :src="advertisers" />
      <br />
    </div>
  </div>
</template>

<style scoped>
@import "../assets/card.css";
</style>
