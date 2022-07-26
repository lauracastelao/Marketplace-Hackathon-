<script setup>

</script>

<template>
<div class="container">
<h2>Login</h2>
<p>¿Eres profesor?</p>
<div>
  <div class="mb-3" id="logear">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Recordar</label>
  </div>
  <a class="btn btn-secondary" > <RouterLink to="/editmember"><H6>Edit Members</H6></RouterLink></a>
</div>
</div>

</template>

<style scoped>

a{
  color:white;
}

#logear{
  width:30vh;

}

.margin {
  padding: 1px;
}
</style>
