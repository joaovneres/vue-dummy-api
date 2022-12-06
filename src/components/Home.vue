<template>
  <div class="justify-content-center">
    <h1 class="display-2">Bem vinda(o) à loja Dummy-API</h1>
  </div>
  <div
    id="carouselExampleCaptions"
    class="carousel slide carousel-tam mb-4"
    data-bs-ride="false"
    v-if="products[0]"
  >
    <button type="button" class="btn btn-danger">Últimas unidades</button>
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner carousel-tam d-flex">
      <div class="carousel-item active">
        <img
          :src="products[0].thumbnail"
          class="rounded mx-auto d-block h-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block bg-transparency">
          <p class="card-text desconto m-0">
            R${{
              (products[0].price * (1 + products[0].discountPercentage / 100)).toFixed(0)
            }},00
          </p>
          <h4 class="card-title m-0">R${{ products[0].price }},00</h4>
          <p class="card-text m-0 valorDesconto">
            {{ products[0].discountPercentage }}% OFF
          </p>
          <h5 class="card-title">{{ products[0].title }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          :src="products[8].thumbnail"
          class="rounded mx-auto d-block h-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block bg-transparency">
          <p class="card-text desconto m-0">
            R${{
              (products[8].price * (1 + products[8].discountPercentage / 100)).toFixed(0)
            }},00
          </p>
          <h4 class="card-title m-0">R${{ products[8].price }},00</h4>
          <p class="card-text m-0 valorDesconto">
            {{ products[8].discountPercentage }}% OFF
          </p>
          <h5 class="card-title">{{ products[8].title }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          :src="products[1].thumbnail"
          class="rounded mx-auto d-block h-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block bg-transparency">
          <p class="card-text desconto m-0">
            R${{
              (products[1].price * (1 + products[1].discountPercentage / 100)).toFixed(0)
            }},00
          </p>
          <h4 class="card-title m-0">R${{ products[1].price }},00</h4>
          <p class="card-text m-0 valorDesconto">
            {{ products[1].discountPercentage }}% OFF
          </p>
          <h5 class="card-title">{{ products[1].title }}</h5>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <List />
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiConf from "@/api-conf.json";
import axios from "axios";
import List from "./product/List.vue";

const baseURL = apiConf.baseURL;

// array to store the products
const products = ref([]);

const getAllProducts = () => {
  axios
    .get(baseURL + "/products")
    .then((response) => {
      products.value = response.data.products;
      console.log(response);
      console.log(products.value[0].title);
    })
    .catch((error) => {
      console.log("Erro: " + JSON.stringify(error));
    });
};

// get the products after the component is rendered
onMounted(() => {
  getAllProducts();
});
</script>

<style lang="css" scoped>
p.desconto {
  text-decoration: line-through;
  color: #aeaeae;
}
p.valorDesconto {
  color: #23ff5a;
  font-size: small;
}

div.carousel-tam {
  height: 40vh;
  background-color: #292f33;
}
div.bg-transparency {
  background-color: #5e5e5e82;
}
</style>
