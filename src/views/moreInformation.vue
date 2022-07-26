<script setup>
import {advertisersFactory} from '../todosSetup'
const {advertisersIncompleted, deleteAdvertiser} = advertisersFactory();
</script>

<template>

<h3>+ información</h3>

    <div class="card" style="width: 18rem">
  
    <div class="card" style="width: 18rem"></div>
    <div
      class="card-body"
      v-for="advertiser in advertisersIncompleted"
      :key="advertiser.id"
    >
      <div class="images">
        <img src="src\assets\Vue.png" />
        <p>curso:</p>
        <p class="card-text">
            
          <strong>{{ advertiser.name }}</strong>
        </p>
      </div>
      <br />
      <p>Descripcion:</p>
      <p class="card-text">{{ advertiser.description }}</p>
      <br>
      <p>duracion:</p>
      <p class="card-text">{{ advertiser.duration }}</p>
      <br>
      <p>Moadalidad:</p>
      <p class="card-text">{{ advertiser.modality }}</p>
      <br>
      <p>formador:</p>
      <p class="card-text">{{ advertiser.formador }}</p>
      <br>
      <p>Coformador:</p>
      <p class="card-text">{{ advertiser.coformador }}</p>
      <br>
      <p>Locación:</p>
      <p class="card-text">{{ advertiser.location }}</p>
      <br>
      <p>Precio:</p>
      <strong>{{ advertiser.price }}</strong>
      <br />
      <div class="buttons">
        <button id="margin" type="button" class="btn btn-secondary"><RouterLink to="/contact"><a class="changecolor">Contactar</a></RouterLink></button>

        <button id="margin1" type="button" class="btn btn-success"> <RouterLink to="/"> Home </RouterLink>  </button>

        <button class="heart" @click="toggle(advertiser.id)">❤️</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.img_banner {
  width: 100%;
  height: 50%;
}
.banner_head {
  width: 100%;
  height: 20%;
}
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

.deletepadding {
  position: relative;
  margin: 5px;
}

/* #margin {
  margin: -2px;
  margin-top: 2px ;
} */

#margin1 {
    background: rgb(226, 199, 27);
    border: none;
}

.changecolor {
  color: #fff;
}

div {
    margin: auto;
}

h3 {
    text-align: center;
    margin-top: 2rem;
}
</style>