<template>
  <nav class="navbar navbar-expand-lg bg-light shadow-sm p-3 bg-white rounded">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/products">Produtos</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Pesquisar"
            aria-label="Search"
            v-model="consultar"
          />
          <router-link class="nav-link active" :to="'/products/pesquisar/' + consultar">
            <button class="btn btn-outline-success" type="submit">Pesquisar</button>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const consultar = ref("");
</script>

<style lang="css" scoped></style>
