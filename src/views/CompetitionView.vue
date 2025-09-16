<template>
  <div>
    <!-- Header -->
    <div class="fixed top-0 left-0 w-full z-50">
      <HeaderView />
    </div>
    
    <!-- 主要内容 -->
    <main class="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-6 py-12">
        <!-- 页面标题 -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">竞赛介绍</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            探索iOS开发竞赛的精彩世界，提升技能，展现才华
          </p>
        </div>

        <!-- 竞赛概览 -->
        <section class="mb-16">
          <n-card class="mb-8" size="large">
            <div class="text-center p-8">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">iOS开发竞赛平台</h2>
              <p class="text-gray-600 text-lg">
                WHU iOS Club 致力于为同学们提供丰富的竞赛机会，帮助大家在实战中提升iOS开发技能
              </p>
            </div>
          </n-card>
        </section>

        <!-- 竞赛类型 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">竞赛类型</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 校内竞赛 -->
            <n-card hoverable class="h-full">
              <div class="p-6 text-center">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H7m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">校内竞赛</h3>
                <p class="text-gray-600 mb-4">面向武汉大学学生的iOS开发比赛，包括创新应用设计、编程挑战等</p>
                <div class="text-sm text-blue-600 font-medium">参与门槛低 · 奖励丰厚</div>
              </div>
            </n-card>

            <!-- 全国性竞赛 -->
            <n-card hoverable class="h-full">
              <div class="p-6 text-center">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">全国性竞赛</h3>
                <p class="text-gray-600 mb-4">参与全国大学生程序设计竞赛、移动应用创新赛等高水平比赛</p>
                <div class="text-sm text-orange-600 font-medium">影响力大 · 含金量高</div>
              </div>
            </n-card>

            <!-- 企业挑战赛 -->
            <n-card hoverable class="h-full">
              <div class="p-6 text-center">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">企业挑战赛</h3>
                <p class="text-gray-600 mb-4">与知名企业合作举办的实战项目竞赛，贴近行业需求</p>
                <div class="text-sm text-purple-600 font-medium">实战经验 · 就业机会</div>
              </div>
            </n-card>
          </div>
        </section>

        <!-- 近期竞赛 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">竞赛资源</h2>
          <div class="space-y-6">
            <n-card hoverable>
              <div class="p-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      <a
  href="https://developer.apple.com/cn/swift-student-challenge/"
  target="_blank"
  rel="noopener"
  class="footer-link"
>
  WWDC-Swift学生挑战赛
</a>
                    </h3>
                    <p class="text-gray-600">每年的二或三月份，苹果面向全球举办 WWDC-Swift 学生挑战赛，选拔 350 名开发者给予奖金</p>
                  </div>
                  <div class="mt-4 md:mt-0">
                    <span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">进行中</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                  <!-- <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    报名截止：2024年8月15日
                  </div> -->
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 0h10a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
                    </svg>
                    为期一年的 Apple Developer Program 会员资格、参加 App Development with Swift 认证考试的免费凭证，以及 Apple 准备的特别礼物！
                  </div>
                </div>
              </div>
            </n-card>

            <n-card hoverable>
              <div class="p-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      <a
                        href="https://www.appcontest.net/"
                        target="_blank"
                        rel="noopener"
                        class="footer-link"
                      >
                        移动应用创新赛
                      </a>
                    </h3>
                    <p class="text-gray-600">教育部主办的全国性移动应用开发竞赛，iOS赛道</p>
                  </div>
                  <div class="mt-4 md:mt-0">
                    <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">即将开始</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    开始时间：每年9月1日
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    国家级奖项认证
                  </div>
                </div>
              </div>
            </n-card>
          </div>
        </section>



        <!-- 行动号召 -->
        <section class="text-center">
          <n-card class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div class="p-12">
              <h2 class="text-3xl font-bold mb-4">准备好挑战自己了吗？</h2>
              <p class="text-xl mb-8 opacity-90">加入我们，参与激动人心的iOS开发竞赛</p>
              <div class="space-x-4">
                <n-button size="large" strong @click="goToJoin" class="bg-white text-blue-600 hover:bg-gray-100">
                  加入社团
                </n-button>
                <n-button size="large" strong @click="goBack" type="tertiary" ghost>
                  返回主页
                </n-button>
              </div>
            </div>
          </n-card>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <FooterView />
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'
import { NCard, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

export default {
  name: 'CompetitionView',
  components: {
    HeaderView,
    FooterView,
    NCard,
    NButton
  },
  setup() {
    const router = useRouter()

    const goToJoin = () => {
      router.push('/join')
    }

    const goBack = () => {
      if (window.history.length > 1) {
        router.go(-1)
      } else {
        router.push('/')
      }
    }

    return {
      goToJoin,
      goBack
    }
  }
}
</script>

<style scoped>
/* 可以添加一些自定义样式 */
</style>
