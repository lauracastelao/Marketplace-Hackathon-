<script setup>


</script>

<template>


<<<<<<< HEAD

<Card/>
<Header/>
    <div>
      v-for="advertiser in advertisersIncompleted"
      :key="advertiser.id"
    <div>
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
>>>>>>> 1c5e704fa70ef4332d2037a0fd01d3526c46ff27
=======
<Card/>
<Header/>
<Footer/>
  

</template>


<style scoped>
@import "../assets/card.css";
</style>
>>>>>>> 803c4fd62d4fcad0d648d741dba82f4b0a4cf694
