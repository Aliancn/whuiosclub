<template>
  <!-- app -->
  <div>
    <!-- 全屏展示区域 -->
    <section class="hero-section">
      <div class="hero-background">
        <img src="@/assets/img/tests.jpeg" alt="iOS Club Background" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text-container">
          <h1 class="hero-title">创新・分享・成长</h1>
          <p class="hero-subtitle">武汉大学 iOS Club</p>
        </div>
        <!-- <div class="scroll-indicator">
          <div class="scroll-arrow">↓</div>
          <p class="scroll-text">向下滑动探索更多</p>
        </div> -->
      </div>
    </section>

    <!-- 主要内容区域 -->
    <main class="container mx-auto py-10">
      <!-- logo -->
      <section class="gap-6">
        <n-card size="large" class="px-6 md:px-12 flex justify-center items-center" :bordered="false">
          <section class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
            <div class="wel-text">
              <div class="text-left mb-8">
                <h1 class="text-5xl md:text-8xl font-bold text-foreground">We are</h1>
                <h2 class="text-5xl md:text-8xl mt-2 font-bold text-foreground">iOS Club.</h2>
                <p class="mt-4 text-lg md:text-xl text-muted-foreground">果粉聚集地 创意加油站</p>
                <div class="mt-5 flex space-x-4">
                  <n-button strong round type="tertiary" @click="join"> 加入我们 </n-button>
                  <n-button strong round type="success" @click="learnMore"> Learn more ! </n-button>
                </div>
              </div>
            </div>
            <img class="logo-img" src="@/assets/img/logo.jpeg" alt="iOS Club Logo" />
          </section>
        </n-card>
      </section>

    <!-- about -->
    <section class="gap-6 mt-12">
      <n-card size="large" class="px-6 md:px-12 flex justify-center items-center" :bordered="false">
        <section class="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-6">
          <img class="sucai1-img" src="@/assets/img/sucai1.png" alt="iOS Club" />
          <div class="wel-text">
            <div class="text-left mb-8">
              <h1 class="text-4xl font-bold text-foreground">About</h1>
              <h2 class="text-4xl mt-2 font-bold text-foreground">iOS Club.</h2>
              <p class="mt-4 leading-relaxed text-lg">
                欢迎来到 WHU iOS Club！🎉 这里是一个充满创意与激情的社区，专注于探索 Apple iOS
                生态系统的无限可能！
              </p>
              <p class="mt-4 text-muted-foreground text-lg">
                无论你是刚接触 Swift
                编程的小白，还是已经有丰富开发经验的高手，在这里，你都能找到志同道合的朋友，一起学习、交流，创造出令人惊叹的
                iOS 应用！
              </p>
            </div>
          </div>
        </section>
      </n-card>
    </section>

  </main>
  </div>
</template>

<script>
import { NCard, NButton } from 'naive-ui';
import { useRouter } from 'vue-router';

export default {
  name: 'MainView',
  components: {
    NCard,
    NButton,
  },
  emits: ['open-search'],
  setup(props, { emit }) {
    const router = useRouter();
    
    const join = () => {
      router.push('/join');
    };
    
    const learnMore = () => {
      emit('open-search');
    };
    
    return {
      join,
      learnMore,
    };
  },
};
</script>

<style lang="css" scoped>
/* 全屏图片区域样式 */
.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.2)
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  animation: fadeInUp 1.5s ease-out;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10vh; /* 调整底部距离 */
}

.hero-text-container {
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInFromTop 1s ease-out;
  font-family: 'Brush Script MT', 'Lucida Handwriting', 'Apple Chancery', cursive, serif;
  letter-spacing: 0.05em;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: slideInFromBottom 1s ease-out 0.5s both;
  font-family: 'Brush Script MT', 'Lucida Handwriting', 'Apple Chancery', cursive, serif;
  letter-spacing: 0.02em;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: fadeInUp 1s ease-out 1s both;
}

.scroll-arrow {
  font-size: 2rem;
  animation: bounce 2s infinite;
  margin-bottom: 0.5rem;
}

.scroll-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* 动画定义 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-content {
    padding-bottom: 10vh; /* 移动端减少底部距离 */
  }
}

/* 原有样式 */
.wel-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
  /* 更好地支持小屏幕 */
}

.logo-img {
  margin: 2rem auto;
  width: 100%;
  max-width: 20rem; /* 限制最大宽度 */
  pointer-events: none;
}

.sucai1-img {
  margin: 4rem auto;
  width: 100%;
  max-width: 30rem;
  height: auto;
  pointer-events: none;
}
</style>
