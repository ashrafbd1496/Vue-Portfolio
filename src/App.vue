<template>
  <div class="bg-secondary text-primary min-h-screen">
  <Navbar />
</div>
</template>

<script setup>
// Importing the Navbar component Asynchronously
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'));


</script>
