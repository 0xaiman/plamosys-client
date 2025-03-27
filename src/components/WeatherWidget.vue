<template>
  <div class="flex items-center bg-base-100 shadow-md p-4 rounded-lg w-full">
    <!-- Weather Icon -->
    <div class="mr-4">
      <img :src="iconUrl" alt="Weather Icon" class="w-12 h-12" />
    </div>

    <!-- Weather Details -->
    <div>
      <h3 class="text-lg font-semibold">{{ summary }}</h3>
      <p class="text-sm">
        🌡️ {{ temperature }}°C | 💧 {{ humidity }}% | 💨 {{ windSpeed }} km/h
      </p>
      <p class="text-sm text-gray-500">{{ additionalInfo }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Import local weather icons
import clearSkyIcon from "@/assets/weather-assets/clear-sky.png";
import downpourIcon from "@/assets/weather-assets/downpour.png";
import lightningIcon from "@/assets/weather-assets/lighting.png";

// Define component props
const props = defineProps({
  summary: String, // e.g. "No rain expected today"
  temperature: Number, // e.g. 20
  humidity: Number, // e.g. 10
  windSpeed: Number, // e.g. 5
  condition: String, // e.g. "clear", "rainy", "storm"
  additionalInfo: String, // e.g. "Heavy rain expected at 4PM"
});

// Define icon map correctly
const iconMap = {
  clear: clearSkyIcon,
  storm: lightningIcon,
  downpour: downpourIcon,
};

// Compute the icon URL dynamically
const iconUrl = computed(() => iconMap[props.condition] || clearSkyIcon);
</script>
