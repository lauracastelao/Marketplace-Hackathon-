<script setup>
import router from "../router";
import { advertisersFactory } from "../todosSetup";
const { add } = advertisersFactory();
const addAndNavigate = (
  name,
  description,
  duration,
  price,
  modality,
  formador,
  coformador,
  location,
  cover
) => {
  add(
    name,
    description,
    duration,
    price,
    modality,
    formador,
    coformador,
    location,
    cover
  );
  router.push("/");
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold" for="">**** **** **** 1060</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Fecha de caducidad:</span
              ><span>17/03/22</span></small
            >
            <small
              ><span class="fw-bold">Nombre:</span><span>Kumar</span></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold">**** **** **** 2753</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Fecha de caducidad:</span
              ><span>01/10/22</span></small
            >
            <small><span class="fw-bold">Nombre:</span><span>Lisa</span></small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold">**** **** **** 4451</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Expiry date:</span
              ><span>10/16</span></small
            >
            <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card p-3">
          <p class="mb-0 fw-bold h4">Metodos de pago</p>
        </div>
      </div>
      <div class="col-12">
        <div class="card p-3">
          <div class="card-body border p-0">
            <p>
              <a
                class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                <span class="fw-bold">PayPal</span>

                <span class="fab fa-cc-paypal"> </span>
              </a>
            </p>
            <div class="collapse p-3 pt-0" id="collapseExample">
              <div class="row">
                <div class="col-8">
                  <p class="h4 mb-0">Resumen de compra</p>
                  <p class="mb-0">
                    <span class="fw-bold">Producto:</span
                    ><span class="c-green">: Cuenta Standar</span>
                  </p>
                  <p class="mb-0">
                    <span class="fw-bold">Precio:</span
                    ><span class="c-green">:$5</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body border p-0">
            <p>
              <a
                class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                <span class="fw-bold">Tarjeta de credito</span>
                <span class="">
                  <span class="fab fa-cc-amex"></span>
                  <span class="fab fa-cc-mastercard"></span>
                  <span class="fab fa-cc-discover"></span>
                </span>
              </a>
            </p>
            <div class="collapse show p-3 pt-0" id="collapseExample">
              <div class="row">
                <div class="col-lg-5 mb-lg-0 mb-3">
                  <p class="h4 mb-0">Resumen de compra</p>
                  <p class="mb-0">
                    <span class="fw-bold">Producto:</span
                    ><span class="c-green">: Cuenta Premium</span>
                  </p>
                  <p class="mb-0">
                    <span class="fw-bold">Precio:</span>
                    <span class="c-green">:$30</span>
                  </p>
                  <p class="mb-0"></p>
                </div>
                <div class="col-lg-7">
                  <form action="" class="form">
                    <div class="row">
                      <div class="col-12">
                        <div class="form__div">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label"
                            >Numero de tarjeta</label
                          >
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="form__div">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label">MM / yy</label>
                        </div>
                      </div>

                      <div class="col-6">
                        <div class="form__div">
                          <input
                            type="password"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label">cvv code</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form__div">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=" "
                          />
                          <label for="" class="form__label"
                            >Titular de la tarjeta
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                       
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <!-- <div class="btn btn-danger payment">Métodos de pago</div> -->
      </div>
    </div>
  </div>

  <div class="container">
    <label for="new-task"><strong>Añadir curso</strong></label>
    <br />
    <label>Name</label>
    <br />
    <input id="new-task" type="text" v-model="name" />
    <br />
    <label>Description</label>
    <br />
    <input id="new-task" type="text" v-model="description" />
    <br />
    <label>Duración</label>
    <br />
    <input id="new-task" type="text" v-model="duration" />
    <br />
    <label>Precio</label>
    <br />
    <input id="new-task" type="text" v-model="price" />
    <br />
    <label>Modalidad</label>
    <br />
    <input id="new-task" type="text" v-model="modality" />
    <br />
    <label>Formador</label>
    <br />
    <input id="new-task" type="text" v-model="formador" />
    <br />
    <label>Co-formador</label>
    <br />
    <input id="new-task" type="text" v-model="coformador" />
    <br />
    <label>Localización</label>
    <br />
    <input id="new-task" type="text" v-model="location" />
    <br />
    <label>Subir imagen</label>
    <br />
    <input type="file" name="archivosubido" />
    <input type="submit" value="Enviar datos" />
    <br />
    <button
      type="add"
      class="btn btn-info container d-flex justify-content-center"
      @click="
        addAndNavigate(
          name,
          description,
          duration,
          price,
          modality,
          formador,
          coformador,
          location,
          cover
        )
      "
    >
      Pagar
    </button>
  </div>
</template>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  margin: 30px auto;
}

.container .card {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff;
  border-radius: 0px;
}

body {
  background: #eee;
}

.btn.btn-primary {
  background-color: #ddd;
  color: black;
  box-shadow: none;
  border: none;
  font-size: 20px;
  width: 100%;
  height: 100%;
}

.btn.btn-primary:focus {
  box-shadow: none;
}

.container .card .img-box {
  width: 80px;
  height: 50px;
}

.container .card img {
  width: 100%;
  object-fit: fill;
}

.container .card .number {
  font-size: 24px;
}

.container .card-body .btn.btn-primary .fab.fa-cc-paypal {
  font-size: 32px;
  color: #3333f7;
}

.fab.fa-cc-amex {
  color: #1c6acf;
  font-size: 32px;
}

.fab.fa-cc-mastercard {
  font-size: 32px;
  color: red;
}

.fab.fa-cc-discover {
  font-size: 32px;
  color: orange;
}

.c-green {
  color: green;
}

.box {
  height: 40px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
}

.btn.btn-primary.payment {
  background-color: #1c6acf;
  color: white;
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

.form__div {
  height: 50px;
  position: relative;
  margin-bottom: 24px;
}

.form-control {
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: 1px solid #dadce0;
  border-radius: 0;
  outline: none;
  padding: 2px;
  background: none;
  z-index: 1;
  box-shadow: none;
}

.form__label {
  position: absolute;
  left: 16px;
  top: 10px;
  background-color: #fff;
  color: #80868b;
  font-size: 16px;
  transition: 0.3s;
  text-transform: uppercase;
}

.form-control:focus + .form__label {
  top: -8px;
  left: 12px;
  color: #1a73e8;
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
}

.form-control:not(:placeholder-shown).form-control:not(:focus) + .form__label {
  top: -8px;
  left: 12px;
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
}

.form-control:focus {
  border: 1.5px solid #1a73e8;
  box-shadow: none;
}

h4 {
  font-size: 2vh;
}
</style>
