<template>
  <MainLayout>
    <div class="flex flex-col">
      <router-view class="flex-1" />
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "./layouts/MainLayout.vue";
</script>
