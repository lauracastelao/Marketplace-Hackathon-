<script setup>
import { ref } from "@vue/reactivity";
import { advertisersFactory } from "../todosSetup";
import addPictures from "../mock/all.js";

const { advertisersIncompleted, toggle, addCourseCart, addCartInCompleted } = advertisersFactory();
/* const addPicture = ref([...addPictures]);

const picturesFind = addPicture.value.forEach((t)=> {
})
 */
</script>

<template>
  <div class="img_banner">
    <img
      class="banner_head"
      src="../assets/img/Hackea tu educación (2).png"
      alt=""
    />
  </div>
  <div class="card container-fluid border-0" style="width: 18rem">
    <!-- <img v-for="addPicture in addPictures" :key="addPicture.cover"
      :src="addPictures"
      class="card-img-top"
    > -->
    <div class="card" style="width: 18rem"></div>
    <div
      class="card-body"
      v-for="advertiser in advertisersIncompleted"
      :key="advertiser.id"
    >
      <div class="images">
        <img src="src\assets\Vue.png" />
        <p class="card-text">
          <strong>{{ advertiser.name }}</strong>
        </p>
      </div>
      <br />
      <p class="card-text">{{ advertiser.description }}</p>
      <strong>{{ advertiser.price }}</strong>
      <br />
      <div class="buttons">
        <button id="margin" type="button" class="btn btn-secondary"><RouterLink to="/contact"><a class="changecolor">Contactar</a></RouterLink></button>

        <button id="margin" type="button" class="btn btn-success"> <RouterLink to="/moreinfo"> +info </RouterLink>  </button>

        <button class="heart" @click="toggle(advertiser.id)">❤️</button>
        <button class="heart" @click="addCourseCart(advertiser.id)">€</button>
      </div>
    </div>
  </div>
  
</template>

<style lang="css" scoped>
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

#margin {
  margin: -5px;
  margin-top: 1px ;
}

.changecolor {
  color: #fff;
}

</style>
