<template>
  <!-- app -->
  <n-carousel
    effect="card"
    prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
    next-slide-style="transform: translateX(50%) translateZ(-800px);"
    style="height: 400px"
    :show-dots="false"
    :autoplay="true"
    :interval="1500"
  >
    <!-- 手动编写每个轮播项 -->
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img" src="@/assets/img/site1.png" alt="Site Image 1" />
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img" src="@/assets/img/site2.png" alt="Site Image 2" />
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img" src="@/assets/img/site3.png" alt="Site Image 3" />
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img" src="@/assets/img/site4.png" alt="Site Image 4" />
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img" src="@/assets/img/site5.png" alt="Site Image 5" />
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img" src="@/assets/img/site6.png" alt="Site Image 6" />
    </n-carousel-item>
  </n-carousel>
</template>

<script setup>
import { NCarousel, NCarouselItem } from 'naive-ui'
</script>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* 调整在不同屏幕上的显示 */
@media (max-width: 768px) {
  .n-carousel {
    height: 250px; /* 在小屏幕上减少轮播的高度 */
  }
}
</style>
