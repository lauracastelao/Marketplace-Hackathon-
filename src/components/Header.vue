<script setup>
import { advertisersFactory } from "../todosSetup";

const { filterByWorld } = advertisersFactory();
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top d-flex">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Educoders 🥇</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/course">Cursos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/favourites">Favoritos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cart">Carrito</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/member">Miembros</RouterLink>
          </li>
        </ul>
        <div class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            @click="filterByWorld(advertisers.name)"
            class="btn btn-outline-success"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="css">
.nav-item {
  display: flex;
  justify-content: space-evenly;
}
a {
  text-decoration: none;
  margin-right: 1rem;
  color: #000;
}

a:hover {
  color: crimson;
}
</style>
