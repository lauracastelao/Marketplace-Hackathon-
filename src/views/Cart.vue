<script setup></script>

<template>
  <div class="container ">
    <h3>Resumen de Compra</h3>
    <div class="container d-flex border border-dark">
      <div class="container-sm d-flex" >
        <img class="course_img"  src="../assets/img/vue-1024x415.png" alt="" />
      </div>
      <div class="container-sm d-flex flex-sm-column justify-content-end">
        <p class="fw-bold">Curso Vue.js</p>
        <p>29,95€</p>
      </div>
    </div>

    <div class="container">
      <h4>Formulario de Pago para Profesores</h4>
      <div class="">
        <form class="container d-flex flex-sm-column" action="">
          <input placeholder="Nombre" type="text" />
          <input placeholder="Telefono" type="number" />
          <input placeholder="Direccion" type="text" />
          <input placeholder="Numero de Targeta" type="text" />
        </form>
        <button><a href="">Submit</a></button>
       </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .course_img{
    width: 50%;
    height: 50;
  }
  button{
    display: flex;
    justify-content: center;
  }
 

</style>
