<template>
  <div
    class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-4"
  >
    <table class="table table-zebra">
      <!-- Table Head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>In Charge</th>
          <th>Memo</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ task.name }}</td>
          <td>{{ task.assignedTo }}</td>
          <td>{{ task.memo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Mock task data
const tasks = ref([
  { name: "Fix sensor issue", assignedTo: "John Doe", memo: "Urgent" },
  {
    name: "Calibrate humidity sensor",
    assignedTo: "Jane Smith",
    memo: "Check logs",
  },
  {
    name: "Replace fertilizer",
    assignedTo: "Emily Johnson",
    memo: "Use organic type",
  },
  { name: "Water plants", assignedTo: "Michael Brown", memo: "Twice a day" },
  {
    name: "Inspect soil quality",
    assignedTo: "Sophia Davis",
    memo: "Lab analysis needed",
  },
]);
</script>
