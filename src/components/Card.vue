<script setup>
import { advertisersFactory } from "../todosSetup";
const { advertisersIncompleted, toggle } = advertisersFactory();
</script>

<template>
  <div class="card" style="width: 18rem">
    <img
      src="https://miro.medium.com/max/1200/1*XpExcSt-d8XdnkIT3bcutg.jpeg"
      class="card-img-top"
      alt="..."
    />
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
    </div>
  </div>

  <!-- <h3>Cursos</h3>

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
  </div> -->
</template>

<style lang="css" scoped>
.card {
  margin-top: 10vh;
}

.heart {
  display: flex;
  justify-content: right;
}
</style>
