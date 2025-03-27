<template>
  <div class="flex flex-row gap-4">
    <!-- RIGHT SIDE -->

    <div class="flex flex-col gap-4 w-3/4">
      <div id="statistics-cards " class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Temperature" value="20°C" :change="-6" />
        <Card title="Temperature" value="20°C" :change="-6" />
        <Card title="Temperature" value="20°C" :change="-6" />
        <Card title="Temperature" value="20°C" :change="-6" />
      </div>
      <div class="flex flex-col w-full">
        <div class="flex flex-row justify-between">
          <span></span>
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1">Filter</div>
            <ul
              class="menu dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm"
            >
              <li><a>Hourly</a></li>
              <li><a>Daily</a></li>
              <li><a>Weekly</a></li>
              <li><a>Monthly</a></li>
            </ul>
          </div>
        </div>

        <div id="charts" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Chart
            :type="'bar'"
            :options="barOptions"
            :series="barSeries"
            :title="'temperature'"
          />
          <Chart
            :type="'line'"
            :options="lineOptions"
            :series="lineSeries"
            :title="'temperature'"
          />
          <Chart
            :type="'line'"
            :options="lineOptions"
            :series="lineSeries"
            :title="'temperature'"
          />
          <Chart
            :type="'line'"
            :options="lineOptions"
            :series="lineSeries"
            :title="'temperature'"
          />
        </div>
      </div>

      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
    <!-- RIGHT SIDE -->
    <!-- LEFT SIDE -->
    <div class="w-1/4">
      <WeatherWidget
        summary="No rain expected today"
        :temperature="20"
        :humidity="10"
        :windSpeed="5"
        condition="clear"
        additionalInfo="Heavy rain expected at 4PM"
      />
      <RealTimeClock />
      <vue-cal
        class="vuecal--rounded-theme vuecal--green-theme"
        xsmall
        hide-view-selector
        :time="false"
        active-view="month"
        :disable-views="['week']"
        style="width: 100%; height: 300px"
      >
      </vue-cal>
      <TaskSnippet />
    </div>
    <!-- LEFT SIDE -->
  </div>
</template>
<script setup>
import { ref } from "vue";
import Card from "/src/components/Card.vue";
import RealTimeClock from "/src/components/RealTimeClock.vue";
import TaskSnippet from "/src/components/TaskSnippet.vue";
import Chart from "/src/components/Chart.vue";
import WeatherWidget from "/src/components/WeatherWidget.vue";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

// Bar Chart Data
const barOptions = ref({
  chart: { id: "bar-chart" },
  xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] },
});
const barSeries = ref([
  { name: "Temperature", data: [30, 40, 45, 50, 49, 60, 70, 91] },
]);

// Line Chart Data
const lineOptions = ref({
  chart: { id: "line-chart" },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  },
});
const lineSeries = ref([
  { name: "Humidity", data: [20, 30, 25, 35, 40, 30, 50, 55] },
]);
</script>
