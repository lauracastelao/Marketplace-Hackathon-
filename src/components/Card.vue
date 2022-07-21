<script setup>
import { advertisersFactory } from "../todosSetup";
const { advertisersIncompleted, toggle } = advertisersFactory();
</script>

<template>
  <div class="container-card">
    <div class="cards2">
      <div
        class="card-body border border-dark"
        v-for="advertiser in advertisersIncompleted"
        :key="advertiser.id"
      >
        <img
          src="https://miro.medium.com/max/1200/1*XpExcSt-d8XdnkIT3bcutg.jpeg"
          class="card-img-top"
          alt="..."
        />
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
