<script setup>

</script>

<template>
<h1>Formulario de Membresia</h1>
<div class="container">
    <div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Dirección</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Dirección 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartamento, estudio,piso"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">Ciudad</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Pais</label>
          <select id="inputState" class="form-control">
            <option selected></option>
            <option>España</option>
            <option>China</option>
            <option>Polonia</option>
            <option>Alemania</option>
            <option>Rusia</option>
            <option>España</option>
            <option>China</option>
            <option>Polonia</option>
            <option>Alemania</option>
            <option>Rusia</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Código Postal</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Recordar </label>
        </div>
      </div>
      <button type="submit" class="btn btn-secondary"><RouterLink to="/createmember"><a>Crear Usuario</a></RouterLink></button>
  </div>
  </div>



</template>

<style scoped>
h1{
  margin-top: 0.5rem;
}
.container {
  width: 60vh;
  margin-top:1rem ;
  background: rgb(240, 237, 207);
  padding: 1rem;
  margin: auto;
}

h6 {
  color: #fff
}
</style>