<script setup lang="ts">
import { ref } from "vue";
import ImageSlider from "../components/ImageSlider.vue";
import ASlide from "../components/ASlide.vue";

const curr = ref(0);
const images = ref([
  "/alexander-popov-3InMDrsuYrk-unsplash.jpg",
  "/geran-de-klerk-OomNPPv1Rpk-unsplash.jpg",
  "/joshua-sortino-71vAb1FXB6g-unsplash.jpg",
]);

const next = () => {
  if (curr.value === images.value.length - 1) curr.value = 0;
  else curr.value += 1;
};

const prev = () => {
  if (curr.value === 0) curr.value = images.value.length - 1;
  else curr.value -= 1;
};
</script>

<template>
  <div class="wrapper">
    <h2>Image Slider</h2>

    <ImageSlider @next="next" @prev="prev">
      <ASlide
        v-for="(img, index) in images"
        :src="img"
        :key="index"
        :index="index"
        :curr="curr"
      />
    </ImageSlider>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 5rem 1rem;
}
</style>
