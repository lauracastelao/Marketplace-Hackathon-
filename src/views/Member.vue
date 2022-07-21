<script setup>
import Pop from "../components/CardPop.vue";


</script>

<template>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">¿Ya estás registrado?</h5>
        <p class="card-text">Accede a tu cuenta</p>
        <a class="btn btn-secondary" id="login"><RouterLink to="/loginmember">Login</RouterLink></a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Registrate</h5>
        <p class="card-text">Inscribe tu curso en la plataforma</p>      
        <a class="btn btn-secondary" > <RouterLink to="/buyadvertiser"><H6>Registrar </H6></RouterLink></a>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="css" scoped>
h6 {
    color: white;
}

a{
  color: white;  
}
</style>