<template>
  <div class="relative clip-bottom-ellipse bg-[#1a1a1a]">
    <header class="relative py-20 bg-[#222] min-h-screen" :style="dotPattern">
      <div class="relative z-10 container mx-auto px-4 py-10">
        <div class="flex justify-center">
          <div class="max-w-4xl text-center mb-12">
            <h5 class="uppercase tracking-widest mb-4 text-white">
              Hello, I'm
            </h5>
            <h1 class="text-5xl md:text-6xl font-bold text-white">
              {{ name }}
            </h1>
            <p class="text-lg text-gray-300 mt-2">{{ title }}</p>
          </div>
        </div>

        <div class="flex flex-wrap justify-around items-start">
          <!-- Left Info -->
          <div class="w-full md:w-1/3 pt-10 hidden md:block">
            <div class="mb-20">
              <h6 class="text-xl font-semibold">Expertise</h6>
              <span class="block mt-2 uppercase">{{ expertise }}</span>
            </div>
            <div>
              <div
                class="flex items-center text-white-400 text-sm space-x-1 mb-2"
              >
                <template v-for="i in 5" :key="i">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </template>
                <span class="ml-2 mt-2 px-2 text-xl">{{ rating }}</span>
              </div>
              <p class="text-white">{{ reviews }}</p>
            </div>
          </div>

          <!-- Image -->
          <div class="w-full md:w-1/3 absolute bottom-[-10] sm:mt-50">
            <img :src="profileImage" alt="Profile Image" class="mx-auto" />
          </div>

          <!-- Right Info -->
          <div class="w-full md:w-1/3 pt-10 text-right hidden md:block">
            <div class="flex flex-col items-end mb-20">
              <h6 class="text-right mb-1 uppercase">
                Years <br />
                of Experience
              </h6>
              <h2 class="text-white text-5xl font-bold">
                {{ yearsExperience }}
              </h2>
            </div>
            <div>
              <span class="uppercase tracking-widest text-gray-400 mb-2 block"
                >Featured Work</span
              >
              <h6 class="text-lg text-white">{{ featuredWork }}</h6>
              <div class="mt-4 underline uppercase hover:text-white transition">
                <a href="project-details1.html">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "Cillian Murphy",
  },
  title: {
    type: String,
    default: "UI / UX Designer Based in Melbourne",
  },
  expertise: {
    type: String,
    default: "FRONT-END & WEB DEVELOPER",
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  reviews: {
    type: String,
    default: "7000+ Clients Reviews",
  },
  yearsExperience: {
    type: Number,
    default: 12,
  },
  featuredWork: {
    type: String,
    default: "Bayone Framer UI / UX Template",
  },
  profileImage: {
    type: String,
    default: "/profile-image.jpg",
  },
});

const dotPattern = computed(() => ({
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
  backgroundSize: "10px 10px",
}));
</script>

<style scoped>
/* Optional if you want to apply custom styles beyond Tailwind */
</style>
