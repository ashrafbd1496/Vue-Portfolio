<template>
  <div class="bg-secondary text-primary min-h-screen">
    <Navbar />
    <HeroSection
      name="Omar Al Jabir"
      title="Web Developer Based in Turkiye"
      expertise="Laravel Vue & Tailwind Specialist"
      :rating="4.9"
      reviews="10,000+ Reviews"
      :yearsExperience="12"
      featuredWork="Next Gen Dev Landing Page"
      profileImage="/src/assets/Cillian.png"
    />
    <ServiceSlider />
  </div>
</template>

<script setup>
// Importing the Navbar component Asynchronously
import { defineAsyncComponent } from "vue";
const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
const HeroSection = defineAsyncComponent(() =>
  import("@/components/HeroSection.vue")
);
const ServiceSlider = defineAsyncComponent(() =>
  import("@/components/ServiceSlider.vue")
);
</script>
