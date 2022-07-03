<script setup lang="ts">
defineProps(["src", "index", "curr"]);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="slide-wrapper" :class="index === curr ? 'selected' : ''">
    <img :src="src" alt="" class="slide" />
  </div>
</template>

<style>
.slide-wrapper {
  position: absolute;
  width: 100%;
  height: 500px;
  opacity: 0;
  transition: 0.3s opacity ease-in-out;
}

.selected {
  opacity: 1;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
