<template>
  <div class="card bg-base-100 shadow-md p-4 w-full">
    <h2 class="text-xl font-semibold mb-4">Task Log</h2>

    <!-- Current Tasks -->
    <div class="mb-4">
      <h3 class="text-lg font-medium">Current Tasks</h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(task, index) in currentTasks"
          :key="'current-' + index"
          class="btn btn-outline btn-sm"
        >
          {{ task }}
        </button>
      </div>
      <a href="#" class="text-xs text-blue-500 mt-2 block">View more...</a>
    </div>

    <!-- Overdue Tasks -->
    <div class="mb-4">
      <h3 class="text-lg font-medium text-red-500">Overdue Tasks</h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(task, index) in overdueTasks"
          :key="'overdue-' + index"
          class="btn btn-outline btn-sm btn-error"
        >
          {{ task }}
        </button>
      </div>
      <a href="#" class="text-xs text-blue-500 mt-2 block">View more...</a>
    </div>

    <!-- Upcoming Tasks -->
    <div>
      <h3 class="text-lg font-medium">Upcoming Tasks</h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(task, index) in upcomingTasks"
          :key="'upcoming-' + index"
          class="btn btn-outline btn-sm btn-info"
        >
          {{ task }}
        </button>
      </div>
      <a href="#" class="text-xs text-blue-500 mt-2 block">View more...</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  currentTasks: {
    type: Array,
    default: () => ["Water plants", "Check sensor A"],
  },
  overdueTasks: {
    type: Array,
    default: () => ["Replace fertilizer"],
  },
  upcomingTasks: {
    type: Array,
    default: () => ["Schedule pruning", "Order new seeds"],
  },
});
</script>
