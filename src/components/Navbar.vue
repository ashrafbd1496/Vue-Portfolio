<template>
  <header
    class="flex justify-between items-center p-6 bg-opacity-50 relative z-20"
  >
    <div class="text-white text-3xl font-bold">Logo</div>
    <!-- Mobile Toggle button -->
    <div class="md:hidden z-30">
      <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen" class="text-5xl">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
            alt="close"
            width="50"
            height="50"
          />
        </span>
        <span v-else class="text-5xl">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png"
            alt="menu"
            width="50"
            height="50"
          />
        </span>
      </button>
    </div>
    <!-- Navbar Link -->
    <nav :class="isMenuOpen ? 'block' : 'hidden'" class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-secondary bg-opacity-50 md:bg-transparent md:static md:flex-row md:space-x-5">
      <ul
        class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
      >
        <li v-for="menuitem in Menu" :key="menuitem.name">
          <a
            :href="menuitem.link"
            class="block transition duration-300 hover:text-primary ease-linear text-2xl md:text-lg"
            @click="scrollToSection(menuitem.link)"
          >
            {{ menuitem.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { ref } from "vue";
const Menu = ref([
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Skills", link: "/skill" },
  { name: "Testimonial", link: "/testimonial" },
  { name: "Clients", link: "/client" },
  { name: "News", link: "/news" },
  { name: "Contact", link: "/contact" },
]);
const isMenuOpen = ref(false);
const scrollToSection = (section) => {
  isMenuOpen.value = false;
  const element = document.querySelector(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<style scoped></style>
