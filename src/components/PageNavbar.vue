<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "PageNavbar",
  components: {LoginForm}
}
</script>
<template>
  <div class ="navbarDesktop" data-bs-theme="dark" >
    <header class="py-3  border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
            <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
          </svg>
          <svg width="20" height="16"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-4">PCPARTPICKER</span>
        </a>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search" data-bs-theme="white">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>
      </div>
    </header>
    <nav class="py-2 bg-body-tertiary border-bottom">
      <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
          <li class="nav-item"><router-link to="/builder" class="nav-link link-body-emphasis px-2 active" aria-current="page">Builder</router-link></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/products/cpu"> <i class="bi bi-cpu"></i> CPUs</router-link></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-motherboard"></i> Motherboards</a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-memory"></i> Memory</a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-nvme"></i> Storage</a></li>
              <li><a class="dropdown-item" href="#"> <i class="bi bi-gpu-card"></i> Video Card</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Guides</a></li>
          <li class="nav-item"><router-link to="/forum" class="nav-link link-body-emphasis px-2 active" aria-current="page">Forum</router-link></li>
        </ul>
        <ul class="nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </a>
            <ul class="dropdown-menu dropdown-menu-login dropdown-menu-right">
             <login-form></login-form>
            </ul>
          </li>
          <li class="nav-item"><router-link to="/sign-up" class="nav-link link-body-emphasis px-2">Sign up</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.nav-link {
  color: white;
}
.dropdown-menu-login {
  width: 400px;
}
.nav {
  --bs-nav-link-hover-color: grey ;
}
.py-3 {
  background-color: #212529;
  color:white;
}
</style>