<script setup>
import Pop from "../components/CardPop.vue";


</script>

<template>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Edit Course</h5>
        <p class="card-text">Edit your last Course</p>
        <a class="btn btn-primary"><RouterLink to="/loginmember">Edit course</RouterLink></a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Created a New Course</h5>
        <p class="card-text">Creted a new Course</p>      
        <a class="btn btn-primary" > <RouterLink to="/buyadvertiser"><H6>Add course</H6></RouterLink></a>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="css" scoped>
h6 {
    color: white;
}
</style>