<template>
  <header
    class="flex justify-between items-center p-6 bg-opacity-50 relative z-20 md:border-b border-[rgba(255,255,255,0.1)]"
  >
    <div
      :class="['text-3xl font-bold', isMenuOpen ? 'hidden md:block' : 'block']"
    >
      Logo
    </div>
    <!-- Mobile Toggle button -->
    <div class="md:hidden z-30">
      <button
        type="button"
        class="block focus:outline-none absolute right-0 top-0 mt-4 mr-4 transition duration-500 ease-linear"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span v-if="isMenuOpen" class="text-base">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
            alt="close"
            width="30"
            height="30"
          />
        </span>
        <span v-else class="text-base">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png"
            alt="menu"
            width="30"
            height="30"
          />
        </span>
      </button>
    </div>
    <!-- Navbar Link -->
    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center bg-opacity-90 md:static md:flex-row md:space-x-5 pt-6 transition-all duration-1000 ease-in-out',
        isMenuOpen
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto',
      ]"
    >
      <ul
        class="flex flex-col w-full items-start space-y-10 md:flex-row md:space-x-5 md:space-y-0"
      >
        <li
          v-for="menuitem in Menu"
          :key="menuitem.name"
          class="w-full md:border-none border-b border-[rgba(255,255,255,0.1)]"
        >
          <a
            :href="menuitem.link"
            class="menu-slide w-full text-left block transition duration-300 hover:text-primary ease-linear text-base md:text-base md:border-none py-2 px-4"
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
<style scoped>
.menu-slide {
  display: inline-block;
  transform: translateY(-10px);
  transition: transform 0.3s ease;
}

.menu-slide:hover {
  transform: translateY(0);
}
</style>
