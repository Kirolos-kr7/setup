<script setup lang="ts">
import { ref } from "vue";
import ACollapse from "../components/ACollapse.vue";

const items = ref([
  { title: "XYZ", desc: "xxx" },
  { title: "ABC", desc: "xxx" },
]);
</script>

<template>
  <div class="wrapper">
    <h2>Collapse</h2>

    <div class="collapses">
      <ACollapse v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 5rem 1rem;
}
.collapses {
  margin-top: 3rem;
}
</style>
