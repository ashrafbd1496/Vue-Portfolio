<template>
  <div class="py-16 overflow-hidden bg-secondary">
    <div class="w-max inline-block whitespace-nowrap animate-marquee">
      <div
        v-for="(text, i) in [...services, ...services]"
        :key="i"
        class="inline-block mr-16"
      >
        <h4
          class="flex items-center text-[70px] font-bold"
          :class="i % 2 === 0 ? 'text-white' : 'text-transparent stroke'"
        >
          <span>{{ text }}</span>
          <span class="ml-12 text-[50px] text-transparent stroke">*</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  "UI-UX Experience",
  "Web Development",
  "Digital Marketing",
  "Product Design",
  "Mobile Solutions",
];
</script>

<style scoped>
.stroke {
  -webkit-text-stroke: 1px #fff;
  color: transparent;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 50s linear infinite;
  display: flex;
  will-change: transform;
}
</style>
