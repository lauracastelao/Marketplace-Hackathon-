<script setup></script>

<template>
  <div class="general_cart container-fluid row justify-content-center gap-5">
    <div
      class="cart_card card mb-5 d-flex justfy-content-center"
      style="max-width: 540px"
    >
      <div class="container d-flex justify-content-end mt-2">
        <p>❌</p>
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
            <h5 class="card-title">Curso Vue.js</h5>
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

    <div
      class="cart_card card mb-5 d-flex justfy-content-center"
      style="max-width: 540px"
    >
      <div class="container d-flex justify-content-end mt-2">
        <p>❌</p>
      </div>
      <div class="row g-0">
        <div class="col-md-4 align-items-center d-flex">
          <img
            src="../assets/img/1_yaZ-u-EiZ6kanJP9zPFXVQ.jpeg"
            class="container"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Curso UI/UX en Figma</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, blanditiis excepturi. Quia praesentium ut aliquid hic
              amet odio dignissimos eius? Aut enim, veniam commodi
              necessitatibus voluptas fuga a iste sint?
            </p>
            <p class="card-text text-muted justify-content-end d-flex fw-bold">
              19,95€
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="cart_card card mb-5 d-flex justfy-content-center"
      style="max-width: 540px"
    >
      <div class="container d-flex justify-content-end mt-2">
        <p>❌</p>
      </div>
      <div class="row g-0">
        <div class="col-md-4 align-items-center d-flex">
          <img
            src="../assets/img/errores-comunes-en-javascript.jpg"
            class="container"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Curso JavaScript Vanilla</h5>
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
      <h3>Total a Pagar:</h3>
      <h3>150€</h3>
    </div>
    <div class="container-sm d-flex justify-content-center mt-4">
      <button
        class="checkout_button shadow p-3 mb-5 bg-body rounded border-0 rounded-5"
      >
        <a class="text-decoration-none text-dark" href="">Pagar</a>
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
