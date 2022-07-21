<script setup>
import { advertisersFactory } from "../todosSetup";
const { advertisersIncompleted, toggle } = advertisersFactory();
</script>

<template>
<div class="cards2 container-fluid gap-5">
  <div class="card d-flex justify-content-center border border-dark" style="width: 18rem">
  <div class="image">
    <img
      src="https://miro.medium.com/max/1200/1*XpExcSt-d8XdnkIT3bcutg.jpeg"
      class="card-img-top"
      alt="..."
    />
    </div>
    <div
      class="card-body border border-dark"
      v-for="advertiser in advertisersIncompleted"
      :key="advertiser.id"
    >
      <p class="card-text">{{ advertiser.name }}</p>
      <p class="card-text">{{ advertiser.description }}</p>
      <strong>{{ advertiser.price }}</strong>
      <br />
      <div class="button3">
        <button type="button" class="btn btn-secondary">Saber más...</button>
        <button class="heart" @click="toggle(advertiser.id)">❤️</button>
      </div>
    </div>
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

.button3 {
  display: flex;
  justify-content: center;
}

.heart {
  border: none;
  background-color: transparent;
}


</style>
