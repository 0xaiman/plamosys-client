<template>
  <div class="card bg-base-100 shadow-lg w-full">
    <h2 class="card-title">{{ title }}</h2>
    <div class="w-full card-body">
      <apexchart
        width="100%"
        :type="type"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
    default: "bar",
  },
  series: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
});
</script>
