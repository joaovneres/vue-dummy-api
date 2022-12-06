<template>
  <div class="container-fluid bg-products p-5 justify-space-around">
    <div class="row">
      <div style="display: flex; flex-wrap: wrap" class="col-2">
        <div class="card m-2 bg-light" style="width: 100%" v-for="img in product.images">
          <img :src="img" class="card-img-top" alt="{{product.title}}" />
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap" class="justify-content-around col-8">
        <div class="card m-2 bg-light HoverDiv" style="width: 30rem">
          <img
            :src="product.thumbnail"
            class="card-img-top media"
            alt="{{product.title}}"
          />
          <div class="card-body ">
            <p class="card-text desconto my-1 mx-3">
              R${{
                (product.price * (1 + product.discountPercentage / 100)).toFixed(0)
              }},00
            </p>
            <h4 class="card-title my-1 mx-3">R${{ product.price }},00</h4>
            <p class="card-text my-1 mx-3 valorDesconto">
              {{ product.discountPercentage }}% OFF
            </p>
            <h5 class="card-title my-1 mx-3">{{ product.title }}</h5>
            <p class="card-text my-1 mx-3">
              {{ product.brand }}
            </p>
            <p class="card-text my-1 mx-3">
              {{ product.description }}
            </p>
            <p class="card-text my-1 mx-3">
              Avaliação: {{ product.rating }}
            </p>
            <p class="card-text my-1 mx-3">
              {{ product.stock }}
            </p>
            <router-link :to="'/product/' + product.id">
              <button type="button" class="btn btn-success col-12">Comprar</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import apiConf from "@/api-conf.json";
import axios from "axios";

const baseURL = apiConf.baseURL;
const route = useRoute();

// array to store the products
const product = reactive({
  id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
});

const findProduct = () => {
  axios
    .get(baseURL + "/products/" + route.params.idProduto)
    .then((response) => {
      let obj = response.data;
      (product.id = obj.id),
        (product.title = obj.title),
        (product.description = obj.description),
        (product.price = obj.price),
        (product.discountPercentage = obj.discountPercentage),
        (product.rating = obj.rating),
        (product.stock = obj.sotck),
        (product.brand = obj.brand),
        (product.category = obj.category),
        (product.thumbnail = obj.thumbnail),
        (product.images = obj.images),
        console.log(product);
    })
    .catch((error) => {
      console.log("Erro: " + JSON.stringify(error));
    });
};

// get the products after the component is rendered
onMounted(() => {
  findProduct();
});
</script>

<style lang="css" scoped>
img.media {
  width: 100%;
  height: 400px;
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
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.HoverDiv {
  position: relative;
  overflow: hidden;
  border: 1px solid black;
  width: 360px;
  margin: 10px;
}

.HoverDiv img {
  max-width: 100%;
  text-align: center;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.HoverDiv:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

img {
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  transition: 0.3s;
  position: relative;
  z-index: 1;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  -webkit-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  transform: skewX(-20deg);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
</style>
