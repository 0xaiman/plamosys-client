<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-3xl">Tasks</h1>
    <div
      id="tasks-stats "
      class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center"
    >
      <button class="btn btn-outline btn-success">Current</button>
      <button class="btn btn-outline btn-secondary">Overdue</button>
      <button class="btn btn-outline">Upcoming</button>
    </div>
    <div>
      <TaskTable />
    </div>
  </div>
</template>
<script setup>
import TaskTable from "/src/components/TaskTable.vue";
</script>
