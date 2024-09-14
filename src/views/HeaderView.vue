<template>
  <!-- app -->
  <header
    class="flex items-center justify-between px-6 py-4 shadow-lg w-full backdrop-blur bg-white bg-opacity-50"
  >
    <!-- Logo 和标题 -->
    <!-- 使用 flex-shrink-0 确保 Logo 不被缩小 -->
    <div class="flex items-center flex-shrink-0">
      <!-- <img src="@/assets/img/logo.jpeg" alt="iOS Club Logo" class="h-10 mr-3" /> -->
      <n-gradient-text
        class="text-3xl font-bold"
        :gradient="{
          deg: 180,
          from: 'rgb(255, 146, 106)' /* 橙色 */,
          to: 'rgb(102, 126, 234)' /* 蓝紫色 */
        }"
      >
        iOS Club
      </n-gradient-text>
    </div>

    <!-- 移动端菜单按钮（汉堡按钮） -->
    <button @click="toggleMenu" class="block lg:hidden text-primary focus:outline-none">
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    <!-- 导航菜单 -->
    <nav
      :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
      class="lg:flex lg:items-center w-full lg:w-auto"
    >
      <ul
        class="flex flex-col lg:flex-row lg:space-x-10 space-y-4 lg:space-y-0 items-center lg:items-center"
      >
        <li>
          <a href="/" class="text-lg text-primary hover:text-primary-foreground transition">Home</a>
        </li>
        <li>
          <a href="#" class="text-lg text-primary hover:text-primary-foreground transition"
            >Events</a
          >
        </li>
        <li>
          <a href="/awards" class="text-lg text-primary hover:text-primary-foreground transition"
            >Awards</a
          >
        </li>
      </ul>
    </nav>

    <!-- 加入按钮 -->
    <n-button secondary round type="success" class="hidden lg:inline-block" @click="join">
      Join us
    </n-button>
  </header>
</template>
<script setup>
import { NButton, NGradientText } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const isMenuOpen = ref(false)

const join = () => {
  router.push('/join')
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
