<script setup></script>


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
    <img :src="advertisers.cover">
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