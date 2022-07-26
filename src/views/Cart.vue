<script setup>
import { ref } from '@vue/reactivity';
import {advertisersFactory} from '../todosSetup'
const { deleteAdvertiser, addCartInCompleted} = advertisersFactory();

//const tilte = ref('')

</script>

<template>

 <h3>Carrito de Compras</h3>
 <p v-if="addCartInCompleted.length === 0"><a>No tienes cursos agregados al caritto</a></p> 

  <div class="general_cart container-fluid row justify-content-center gap-5">
    <div
      class="cart_card card mb-5 d-flex justfy-content-center"
      style="max-width: 540px" v-for="advertiser in addCartInCompleted"
      :key="advertiser.id"
    >
      <div class="container d-flex justify-content-end mt-2">
        <button @click="deleteAdvertiser(advertiser.id)">❌</button>
      </div>
      <div class="row g-0">
        <div class="col-md-4 align-items-center d-flex">
          <img
            src="../assets/img/vue-1024x415.png"
            class="container"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"><strong>{{ advertiser.name }}</strong></h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, blanditiis excepturi. Quia praesentium ut aliquid hic
              amet odio dignissimos eius? Aut enim, veniam commodi
              necessitatibus voluptas fuga a iste sint?
            </p>
            <p class="card-text text-muted justify-content-end d-flex fw-bold">
              29,95€
            </p>
          </div>
        </div>
      </div>
    </div>

   

    <div class="container d-flex gap-3 justify-content-end">
      <h3 v-bind="tilte">Total a Pagar:</h3>
      <h3 v-bind="sumar">Gratis</h3>
    </div>
    <div class="container-sm d-flex justify-content-center mt-4">
      <button
        class="checkout_button shadow p-3 mb-5 bg-body rounded border-0 rounded-5"
      >
        <a class="text-decoration-none text-dark" href=""><RouterLink to="/"><a>Pagar</a></RouterLink></a>
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
button {
  display: flex;
  justify-content: center;
}
.general_cart {
  margin-top: 20%;
}
.checkout_button {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 50%;
  height: 50%;
}
.general_cart {
  margin-left: 0;
  margin-right: 0;
}

@media (min-width: 1440px) {
  .checkout_button {
    width: 20%;
    height: 50%;
  }
  .general_cart {
    margin-top: 10%;
  }
}
@media (min-width: 2560px) {
  .checkout_button {
    width: 20%;
    height: 50%;
  }
  .general_cart {
    margin-top: 10%;
  }
  .cart_card {
    gap: 10%;
  }
}
</style>
