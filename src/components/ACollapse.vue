<script setup lang="ts">
defineProps(["item"]);
</script>

<template>
  <details>
    <summary>{{ item.title }}</summary>
    <p>{{ item.desc }}</p>
  </details>
</template>

<style scoped>
details {
  margin: 0.5rem 0;
}
</style>
