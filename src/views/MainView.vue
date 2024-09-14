<template>
  <!-- app -->
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
                <n-button strong round type="tertiary" @click="join"> Join us </n-button>
                <n-button strong round type="success"> Learn more ! </n-button>
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

    <!-- activity -->
    <section class="gap-6 mt-12">
      <n-card size="large" class="px-6 md:px-12 flex justify-center items-center" :bordered="false">
        <section class="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-6 ml-0 md:ml-20">
          <div class="wel-text">
            <div class="text-left mb-8">
              <h1 class="text-4xl font-bold text-foreground">What</h1>
              <h2 class="text-4xl mt-2 font-bold text-foreground">We Do.</h2>
              <p class="mt-4 leading-relaxed text-lg">
                在 iOS Club，我们为成员提供多样化的体验和成长机会，涵盖了 iOS 开发的各个关键领域
              </p>
              <p class="mt-4 text-muted-foreground text-lg">
                无论你是刚接触 Swift
                编程的小白，还是已经有丰富开发经验的高手，在这里，你都能找到志同道合的朋友，一起学习、交流，创造出令人惊叹的
                iOS 应用！
              </p>
            </div>
          </div>
          <TooImg />
        </section>
      </n-card>
    </section>

    <!-- carousel -->
    <section class="gap-6 mt-24">
      <h1 class="text-4xl mt-12 font-bold text-foreground flex justify-center items-center">
        我们的场地
      </h1>
      <n-card size="large" class="px-6 md:px-12 m-6 md:m-12" :bordered="false">
        <CarouselView />
      </n-card>
    </section>
  </main>
</template>

<script>
import { NCard, NButton } from 'naive-ui';
import TooImg from './TooImg.vue';
import CarouselView from './CarouselView.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'MainView',
  components: {
    NCard,
    NButton,
    TooImg,
    CarouselView,
  },
  setup() {
    const router = useRouter();
    const join = () => {
      router.push('/join');
    };
    return {
      join,
    };
  },
};
</script>

<style lang="css" scoped>
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
