<template>
  <div class="container-fluid bg-products p-4">
    <div style="display: flex; flex-wrap: wrap" class="justify-content-around">
      <div class="card mx-2 my-3 bg-light" style="width: 18rem" v-for="p in products">
        <img :src="p.thumbnail" class="card-img-top media" alt="{{p.title}}" />
        <div class="card-body">
          <p class="card-text desconto m-0">
            R${{ (p.price * (1 + p.discountPercentage / 100)).toFixed(0) }},00
          </p>
          <h4 class="card-title m-0">R${{ p.price }},00</h4>
          <p class="card-text m-0 valorDesconto">{{ p.discountPercentage }}% OFF</p>
          <h5 class="card-title">{{ p.title }}</h5>
          <p class="card-text">
            {{ p.description }}
          </p>
          <router-link :to="'/product/' + p.id">
            <button type="button" class="btn btn-success">Comprar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiConf from "@/api-conf.json";
import axios from "axios";

const baseURL = apiConf.baseURL;

// array to store the products
const products = ref([]);

const getAllProducts = () => {
  axios
    .get(baseURL + "/products")
    .then((response) => {
      products.value = response.data.products;
      console.log(response);
      console.log(products);
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
img.media {
  width: 100%;
  height: 226px;
}

p.desconto {
  text-decoration: line-through;
  color: #616161;
}
p.valorDesconto {
  color: #006e1c;
  font-size: small;
}
div.bg-products {
  background-color: #f7f7f7;
}
</style>
