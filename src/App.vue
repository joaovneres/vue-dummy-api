<script setup>
import Footer from "./components/static/Footer.vue";
import Navbar from "./components/static/Navbar.vue";
</script>

<template>
  <div class="bg-secondary-">
    <Navbar />
    <router-view class="min-height" />
    <Footer />
  </div>
</template>

<style scoped>
.min-height {
  min-height: 90vh;
}
</style>
