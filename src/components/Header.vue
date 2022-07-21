<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top d-flex">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
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
            <RouterLink to="/cart">Cart</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/member">Members</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="css">
.nav-item {
  display: flex;
  justify-content: space-evenly;
}
</style>
