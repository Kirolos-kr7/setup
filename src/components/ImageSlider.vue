<script setup lang="ts">
defineEmits(["prev", "next"]);
</script>

<template>
  <div class="slider">
    <button class="slide-btn left" @click="$emit('prev')">
      <svg
        width="40px"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>
    <slot />
    <button class="slide-btn right" @click="$emit('next')">
      <svg
        width="40px"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  margin-top: 3rem;
}

.slide-btn {
  position: absolute;
  height: 500px;
  width: 80px;
  z-index: 8;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.slide-btn.left {
  left: 0;
  right: auto;

  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.592),
    rgba(3, 3, 3, 0)
  );
}

.slide-btn.right {
  left: auto;
  right: 0;

  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.592),
    rgba(3, 3, 3, 0)
  );
}
</style>
