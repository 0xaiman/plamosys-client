<template>
  <div class="flex flex-col gap-6 w-full items-center">
    <h1 class="text-3xl font-semibold">Download Data</h1>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 gap-6">
      <ul class="space-y-4">
        <li
          v-for="(item, index) in downloadOptions"
          :key="index"
          class="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          <!-- Icon -->
          <img
            :src="item.icon"
            :alt="item.name"
            class="w-12 h-12 object-contain"
          />
          <!-- Text -->
          <span class="text-lg font-medium">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Importing images from the assets folder

import csvIcon from "@/assets/csv.png";

// Download options array
const downloadOptions = [
  { name: "Download Sensor Data", icon: csvIcon },
  { name: "Download Task Data", icon: csvIcon },
  { name: "Download Weather Data", icon: csvIcon },
  { name: "Download Crop Yield Report", icon: csvIcon },
];
</script>

<style scoped>
/* Optional Custom Styles */
</style>
