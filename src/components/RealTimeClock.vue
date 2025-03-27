<template>
  <div class="text-end">
    <p class="text-5xl font-bold">{{ time }}</p>
    <p class="text-2xl">{{ day }}, {{ date }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const time = ref("");
const day = ref("");
const date = ref("");

const updateClock = () => {
  const now = new Date();
  time.value = now.toLocaleTimeString("en-GB", { hour12: false });
  day.value = now.toLocaleDateString("en-GB", { weekday: "long" });
  date.value = now.toLocaleDateString("en-GB");
};

onMounted(() => {
  updateClock();
  const interval = setInterval(updateClock, 1000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
p {
  margin: 5px 0;
}
</style>
