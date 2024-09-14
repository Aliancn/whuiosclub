<template>
  <!-- app -->
  <n-grid :x-gap="12" :y-gap="8" :cols="gridCols">
    <!-- 手动添加每一个 Grid 项 -->
    <n-grid-item class="grid-item flex flex-col sm:flex-row justify-center items-center text-center sm:text-left" preview-disabled v-for="(item, index) in content" :key="index">
      <!-- 图片 -->
      <img :src="item.src" class="custom-image rounded-lg border border-gray-300" />
      <!-- 插入文字 -->
      <div class="text-content ml-0 sm:ml-3 mt-4 sm:mt-0">
        <h1 class="text-2xl font-bold text-foreground">{{ item.title }}</h1>
        <p class="mt-4 leading-relaxed text-lg">
          {{ item.description }}
        </p>
      </div>
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
.custom-image {
  width: 150px;
  height: 150px;
  object-fit: cover; /* 确保图片按比例缩放，不变形 */
}

/* 为移动端增加更多间距，确保图片和文字更清晰地显示 */
@media (max-width: 768px) {
  .custom-image {
    width: 120px; /* 小屏幕下调整图片大小 */
    height: 120px;
  }
  .ml-0 {
    margin-left: 0;
  }
  .text-content {
    text-align: center; /* 小屏幕上居中文本 */
    max-width: 100%; /* 取消小屏幕上的宽度限制 */
  }
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>

<script setup lang="ts">
import { NGrid, NGridItem } from 'naive-ui'
import { ref, reactive, onMounted } from 'vue'

// 响应式设置，根据窗口宽度调整列数
const gridCols = ref(2)

const updateGridCols = () => {
  if (window.innerWidth <= 1400) {
    gridCols.value = 1 // 移动端每次显示一列
  } else {
    gridCols.value = 2 // 桌面端每次显示两列
  }
}

onMounted(() => {
  updateGridCols() // 初始化时检查窗口宽度
  window.addEventListener('resize', updateGridCols) // 监听窗口大小变化
})

const content = reactive([
  {
    src: new URL('@/assets/img/1.png', import.meta.url).href,
    title: '💻 代码 (Coding)',
    description:
      '编程是我们的核心！无论你是刚开始学习 Swift 还是已经在开发自己的 App，我们都会提供丰富的实践机会。'
  },
  {
    src: new URL('@/assets/img/2.png', import.meta.url).href,
    title: '📚 学习 (Learning)',
    description:
      '学习是成长的动力！不论是 Swift 基础、架构设计，还是最新的 Apple 开发者工具，你都能在这里找到适合自己的学习资源。'
  },
  {
    src: new URL('@/assets/img/3.png', import.meta.url).href,
    title: '🎨 设计 (Design)',
    description:
      '设计是创意与技术的交汇点。我们关注的不仅仅是代码，还会探讨优秀的 UI/UX 设计，帮助你打造用户友好的 App 界面。'
  },
  {
    src: new URL('@/assets/img/4.png', import.meta.url).href,
    title: '🤝 合作 (Collaboration)',
    description: '团队合作让一切变得更有趣！我们鼓励成员们通过合作完成项目，分享彼此的创意与技能。'
  }
])
</script>
