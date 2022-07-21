<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top d-flex">
    <div class="container-fluid mr-5">
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
.nav-item  {
  display: flex;
  justify-content: space-evenly;
  
}

a {
  text-decoration: none;
  margin-right: 5rem;
  color: white;
  font-size: 1.2rem;
  
}

.btn-outline-success {
  color: whitesmoke;
  border-color: white;
}

.navbar {
  background-color: rgba(16, 173, 145, 1);
}

#navbarSupportedContent {
  margin-left: 1rem;
}

#logo {
  margin-left: 1rem;
}


</style>