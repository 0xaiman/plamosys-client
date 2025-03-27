<template>
  <div class="flex-1">
    <div class="flex flex-row gap-4">
      <!-- RIGHT SIDE -->
      <div class="flex flex-col gap-4 w-3/4">
        <div
          id="statistics-cards"
          class="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
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
      </div>
      <!-- RIGHT SIDE -->

      <!-- LEFT SIDE -->
      <div class="w-1/4 flex flex-col gap-2">
        <WeatherWidget
          summary="No rain expected today"
          :temperature="20"
          :humidity="10"
          :windSpeed="5"
          condition="clear"
          additionalInfo="Heavy rain expected at 4PM"
        />
        <div class="card bg-base-100 shadow-lg p-4">
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
        </div>
        <TaskSnippet />
      </div>
      <!-- LEFT SIDE -->
    </div>
    <div class="w-full my-4">
      <SensorLog :logs="mockSensorData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "/src/components/Card.vue";
import RealTimeClock from "/src/components/RealTimeClock.vue";
import TaskSnippet from "/src/components/TaskSnippet.vue";
import Chart from "/src/components/Chart.vue";
import WeatherWidget from "/src/components/WeatherWidget.vue";
import SensorLog from "/src/components/SensorLog.vue";
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

const mockSensorData = ref([
  {
    id: 1,
    sensorId: "S001",
    parameter: "Temperature (°C)",
    value: 25.3,
    timestamp: "2025-03-28 10:15:00",
  },
  {
    id: 2,
    sensorId: "S001",
    parameter: "Humidity (%)",
    value: 60.2,
    timestamp: "2025-03-28 10:15:00",
  },
  {
    id: 3,
    sensorId: "S001",
    parameter: "Soil Moisture (%)",
    value: 45.5,
    timestamp: "2025-03-28 10:15:00",
  },
  {
    id: 4,
    sensorId: "S002",
    parameter: "Light Intensity (Lux)",
    value: 1200,
    timestamp: "2025-03-28 10:16:00",
  },
  {
    id: 5,
    sensorId: "S002",
    parameter: "CO₂ Levels (ppm)",
    value: 400,
    timestamp: "2025-03-28 10:16:00",
  },
  {
    id: 6,
    sensorId: "S002",
    parameter: "Temperature (°C)",
    value: 22.8,
    timestamp: "2025-03-28 10:16:00",
  },
  {
    id: 7,
    sensorId: "S003",
    parameter: "Humidity (%)",
    value: 58.9,
    timestamp: "2025-03-28 10:17:00",
  },
  {
    id: 8,
    sensorId: "S003",
    parameter: "Soil Moisture (%)",
    value: 50.1,
    timestamp: "2025-03-28 10:17:00",
  },
  {
    id: 9,
    sensorId: "S003",
    parameter: "Light Intensity (Lux)",
    value: 1350,
    timestamp: "2025-03-28 10:17:00",
  },
  {
    id: 10,
    sensorId: "S004",
    parameter: "CO₂ Levels (ppm)",
    value: 410,
    timestamp: "2025-03-28 10:18:00",
  },
  {
    id: 11,
    sensorId: "S004",
    parameter: "Temperature (°C)",
    value: 27.1,
    timestamp: "2025-03-28 10:18:00",
  },
  {
    id: 12,
    sensorId: "S004",
    parameter: "Humidity (%)",
    value: 65.3,
    timestamp: "2025-03-28 10:18:00",
  },
]);
</script>
