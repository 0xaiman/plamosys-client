<template>
  <div class="card bg-base-100 shadow-lg w-full">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p class="text-2xl font-semibold">{{ value }}</p>
      <p
        class="text-sm"
        :class="change >= 0 ? 'text-green-500' : 'text-red-500'"
      >
        {{
          change >= 0
            ? `▲ ${Math.abs(change)}% higher`
            : `▼ ${Math.abs(change)}% lower`
        }}
        than yesterday
      </p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  title: String, // Sensor name (e.g., "Temperature")
  value: String, // Current reading (e.g., "20°C")
  change: Number, // Percentage change from yesterday (e.g., -6 for "6% lower")
});
</script>
