<template>
  <div class="card p-4 bg-base-100 shadow-lg">
    <div class="card-body">
      <h2 class="card-title">Sensor Reading Logs</h2>
      <div class="overflow-x-auto">
        <table class="table table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Sensor ID</th>
              <th>Parameter</th>
              <th>Value</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(log, index) in paginatedLogs" :key="log.id">
              <th>{{ index + 1 + (currentPage - 1) * pageSize }}</th>
              <td>{{ log.sensorId }}</td>
              <td>{{ log.parameter }}</td>
              <td>{{ log.value }}</td>
              <td>{{ log.timestamp }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="join mt-4">
        <button
          class="join-item btn btn-square"
          :disabled="currentPage === 1"
          @click="previousPage"
        >
          «
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          class="join-item btn btn-square"
          :class="{ 'btn-active': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        <button
          class="join-item btn btn-square"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          »
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  logs: {
    type: Array,
    required: true,
  },
});

const currentPage = ref(1);
const pageSize = ref(10);

const totalPages = computed(() =>
  Math.ceil(props.logs.length / pageSize.value)
);

const paginatedLogs = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return props.logs.slice(start, start + pageSize.value);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>
