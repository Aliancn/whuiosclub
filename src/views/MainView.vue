<template>
  <!-- app -->
  <div>
    <!-- 全屏展示区域 -->
    <section class="hero-section">
      <div class="hero-background">
        <img src="@/assets/img/tests.png" alt="iOS Club Background" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text-container center-hero-text">
          <p class="hero-subtitle main-center-title main-black">武汉大学 iOS Club</p>
          <button
            class="join-btn"
            @click="goToJoin"
          >
            JOIN
          </button>
        </div>
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
    <section class="gap-6 mt-0">
      <n-card size="large" class="px-6 md:px-12 flex justify-center items-center" :bordered="false">
        <section class="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-6">
          <img class="sucai1-img" src="@/assets/img/page.png" alt="iOS Club" />
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

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToJoin() {
  router.push('/join')
}
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
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
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
  /* background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.2)
  ); */
  z-index: 2;
}


.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  animation: fadeInUp 1.5s ease-out;
  margin: 0 auto;
  padding: 0;
}

.hero-text-container {
  text-align: center;
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1vw;
}

.hero-title {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInFromTop 1s ease-out;
  font-family: 'Brush Script MT', 'Lucida Handwriting', 'Apple Chancery', cursive, serif;
  letter-spacing: 0.05em;
}
.main-red {
  color: #ff3b30;
  text-shadow: 2px 2px 8px rgba(255,59,48,0.18);
}
.main-yellow {
  color: #ffcc00;
  text-shadow: 2px 2px 8px rgba(255,204,0,0.18);
}
.main-blue {
  color: #007aff;
  text-shadow: 2px 2px 8px rgba(0,122,255,0.18);
}

.hero-subtitle.main-center-title {
  font-size: 6rem;
  margin-bottom: 1.5rem;
  opacity: 0.98;
  animation: slideInFromBottom 1s ease-out 0.5s both;
  font-family: 'Brush Script MT', 'Lucida Handwriting', 'Apple Chancery', cursive, serif;
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .hero-subtitle.main-center-title {
    font-size: 2.2rem;
  }
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
    padding-bottom: 10vh;
    width: 100vw;
    max-width: 100vw;
  }
  .hero-text-container {
    width: 100vw;
    max-width: 99vw;
    padding: 0 1vw;
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

.join-btn {
  margin-top: 2rem;
  padding: 0.75rem 2.5rem;
  font-size: 1.25rem;
  background: linear-gradient(90deg, #ff9800 0%, #ffcc00 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.15);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  font-weight: bold;
  letter-spacing: 0.05em;
}
.join-btn:hover {
  background: linear-gradient(90deg, #ffcc00 0%, #ff9800 100%);
  transform: translateY(-2px) scale(1.04);
}
</style>
