<template>
    <!-- app -->
  <div class="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10">
    <div class="max-w-7xl mx-auto px-4">
      <!-- 返回主页按钮 -->
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center mb-8">
        <NButton type="primary" size="large" @click="goHome"> 返回主页 </NButton>
        <h1 class="text-5xl font-extrabold text-center mb-0 text-gray-900 drop-shadow-md">
          社团荣誉奖状
        </h1>
      </div>

      <!-- 奖状展示网格布局 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- 奖状卡片 -->
        <!-- <transition-group name="fade" tag="div"> -->
        <NCard
          v-for="(award, index) in awards"
          :key="index"
          class="overflow-hidden shadow-lg rounded-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-1 duration-300 ease-in-out"
        >
          <NImage :src="award.image" alt="奖状图片" width="100%" class="rounded-t-lg" />
          <div class="p-4">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ award.title }}</h2>
            <p class="text-gray-600">{{ award.description }}</p>
            <NButton class="mt-4 w-full" type="primary" @click="viewAward(award)">
              查看详情
            </NButton>
          </div>
        </NCard>
        <!-- </transition-group> -->
      </div>
    </div>
  </div>
</template>

<script>
import { NCard, NImage, NButton } from 'naive-ui'
export default {
  data() {
    return {
      awards: [
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award1.jpeg', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award2.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award3.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award4.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award5.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award6.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award7.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award8.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award9.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award10.png', import.meta.url).href // 本地图片
        },
        {
          title: '移动应用创新赛',
          description: '奖励我们的创新和贡献。',
          image: new URL('@/assets/img/award11.png', import.meta.url).href // 本地图片
        }
      ]
    }
  },
  methods: {
    viewAward(award) {
      alert(`查看奖状: ${award.title}`)
    },
    goHome() {
      this.$router.push('/');
    },
  },
  components: {
    NCard,
    NImage,
    NButton
  }
}
</script>

<style scoped>
/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 全局美化样式 */
body {
  /* font-family: 'Inter', sans-serif; */
  /* 使用apple字体 */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  background-color: #f0f4f8;
}

h1 {
  animation: fadeInUp 1s ease-out;
}
</style>
