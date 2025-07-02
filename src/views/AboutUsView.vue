<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <HeaderView />
    
    <!-- 页面标题 -->
    <div class="bg-gradient-to-r from-orange-400 to-purple-600 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">了解我们</h1>
        <!-- <p class="text-xl opacity-90">武汉大学iOS俱乐部详细介绍</p> -->
      </div>
    </div>

    <!-- 轮播图片展示 -->
    <div class="carousel-container mb-8">
    <CarouselView />
    </div>

    <!-- 主要内容 -->
    <div class="container mx-auto px-6 py-12">
      <!-- 历届社团成员 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">社团成员</h2>
        <div class="bg-white rounded-lg shadow-lg p-8">

            <!-- 图片5 -->
            <div class="space-y-4">
              <div class="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img src="@/assets/img/site5.png" alt="社团成员" class="w-full h-full object-cover" />
              </div>
              <!-- <h3 class="text-lg font-semibold text-gray-800">休息区域</h3>
              <p class="text-gray-600 text-sm">温馨的休息区域，为社团成员提供放松和非正式交流的空间。</p> -->
            </div>  


			
          <!-- 成员信息展示 -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- 成员卡片示例 -->
            <div class="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div class="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                <img src="@/assets/img/cym.png" alt="cym头像" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-semibold text-lg mb-2">cym</h3>
              <p class="text-gray-600 text-sm">2022届社长</p>
            </div>

            <div class="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 class="font-semibold text-lg mb-2">李四</h3>
              <p class="text-gray-600 text-sm">2022届技术负责人</p>
            </div>

          </div>
        </div>
      </section>

      <!-- 竞赛得奖 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">竞赛得奖</h2>
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="space-y-6">
            <!-- <div class="border-l-4 border-orange-500 pl-6">
              <h3 class="text-xl font-semibold mb-2">2023年全国大学生移动应用创新大赛</h3>
              <p class="text-gray-600 mb-2">获得全国一等奖</p>
              <p class="text-gray-500 text-sm">参赛作品：智慧校园助手APP</p>
            </div>
            <div class="border-l-4 border-purple-500 pl-6">
              <h3 class="text-xl font-semibold mb-2">2022年苹果Swift学生挑战赛</h3>
              <p class="text-gray-600 mb-2">获得优秀奖</p>
              <p class="text-gray-500 text-sm">参赛作品：AR学习助手</p>
            </div>
            <div class="border-l-4 border-blue-500 pl-6">
              <h3 class="text-xl font-semibold mb-2">2021年"互联网+"大学生创新创业大赛</h3>
              <p class="text-gray-600 mb-2">获得省级银奖</p>
              <p class="text-gray-500 text-sm">参赛作品：校园社交平台</p>
            </div> -->
            
            <!-- 导航到奖状页面 -->
            <div class="text-center">
              <p class="text-gray-600 mb-4">我们在各项竞赛中获得了众多荣誉，点击查看详细的奖状展示</p>
              <button 
                @click="goToAwards"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                查看所有荣誉奖状
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 相关单位 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">相关单位</h2>
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div class="p-4">
              <a 
                href="https://www.whu.edu.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block hover:transform hover:scale-105 transition-transform duration-200"
              >
                <div class="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src="@/assets/img/whu-logo.png" alt="武汉大学Logo" class="w-full h-full object-contain" />
                </div>
                <h3 class="font-semibold mb-2 hover:text-blue-600 transition-colors">武汉大学</h3>
                <p class="text-gray-600 text-sm">.</p>
              </a>
            </div>
            <div class="p-4">
              <a 
                href="https://cs.whu.edu.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block hover:transform hover:scale-105 transition-transform duration-200"
              >
                <div class="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src="@/assets/img/cs-logo.png" alt="计算机学院Logo" class="w-full h-full object-contain" />
                </div>
                <h3 class="font-semibold mb-2 hover:text-blue-600 transition-colors">计算机学院</h3>
                <p class="text-gray-600 text-sm">指导单位</p>
              </a>
            </div>
            <div class="p-4">
              <a 
                href="https://www.apple.com.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block hover:transform hover:scale-105 transition-transform duration-200"
              >
                <div class="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src="@/assets/img/apple-logo.png" alt="苹果公司Logo" class="w-full h-full object-contain" />
                </div>
                <h3 class="font-semibold mb-2 hover:text-blue-600 transition-colors">苹果公司</h3>
                <p class="text-gray-600 text-sm">技术支持</p>
              </a>
            </div>
            <div class="p-4">
              <div class="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span class="text-gray-500 font-bold">🏢</span>
              </div>
              <h3 class="font-semibold mb-2">企业合作伙伴</h3>
              <p class="text-gray-600 text-sm">.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 活动空间 -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">活动空间</h2>
        <div class="bg-white rounded-lg shadow-lg p-8">
          <!-- 静态图片展示 -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <!-- 图片1 -->
            <div class="space-y-4">
              <div class="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src="@/assets/img/site1.png" alt="主活动室" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-lg font-semibold text-gray-800">主活动室</h3>
              <p class="text-gray-600 text-sm">宽敞明亮的主活动室，配备现代化设施，为社团活动提供舒适的环境。</p>
            </div>
            
            <!-- 图片2 -->
            <div class="space-y-4">
              <div class="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src="@/assets/img/site2.png" alt="讨论区域" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-lg font-semibold text-gray-800">.</h3>
              <p class="text-gray-600 text-sm">.</p>
            </div>
            
            <!-- 图片3 -->
            <div class="space-y-4">
              <div class="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src="@/assets/img/site3.png" alt="技术工作坊" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-lg font-semibold text-gray-800">.</h3>
              <p class="text-gray-600 text-sm">占位占位</p>
            </div>
            
            <!-- 图片4 -->
            <div class="space-y-4">
              <div class="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src="@/assets/img/site4.png" alt="展示区域" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-lg font-semibold text-gray-800">展示区域</h3>
              <p class="text-gray-600 text-sm">占位占位</p>
            </div>
            


            
            <!-- 图片6 -->
            <div class="space-y-4">
              <div class="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src="@/assets/img/site6.png" alt="会议室" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-lg font-semibold text-gray-800">会议室</h3>
              <p class="text-gray-600 text-sm">占位</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- 活动室1 -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold">主活动室</h3>
              <p class="text-gray-600 mb-4">位于大创中心</p>
              <a 
                href="https://cn.bing.com/maps?&ty=0&rtp=~pos.30.541632_114.361702__%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E5%AE%9E%E8%B7%B5%E4%B8%AD%E5%BF%83__e_&mode=m&u=1&tt=%E8%B7%AF%E7%BA%BF&tsts0=%2526ty%253D0%2526rtp%253D~pos.30.541632_114.361702__%2525E6%2525AD%2525A6%2525E6%2525B1%252589%2525E5%2525A4%2525A7%2525E5%2525AD%2525A6%2525E5%2525A4%2525A7%2525E5%2525AD%2525A6%2525E7%252594%25259F%2525E5%252588%25259B%2525E6%252596%2525B0%2525E5%252588%25259B%2525E4%2525B8%25259A%2525E5%2525AE%25259E%2525E8%2525B7%2525B5%2525E4%2525B8%2525AD%2525E5%2525BF%252583__e_%2526mode%253Dm%2526u%253D1&tstt0=%E8%B7%AF%E7%BA%BF&cp=p2q7b0thw73j&lvl=14.5&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 shadow-md"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                查看地图位置
              </a>
            </div>
            <!-- 工作坊
            <div class="space-y-4">
              <h3 class="text-xl font-semibold">创新工作坊</h3>
              <p class="text-gray-600">位于创新创业中心B202，专门用于项目开发和技术研讨，提供24小时开放使用。</p>
            </div> -->
          </div>
          
          <!-- 设施介绍
          <div class="mt-8 pt-8 border-t">
            <h4 class="text-lg font-semibold mb-4">设施配备</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl mb-2">💻</div>
                <h5 class="font-semibold mb-1">Mac设备</h5>
                <p class="text-sm text-gray-600">最新MacBook Pro</p>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl mb-2">📱</div>
                <h5 class="font-semibold mb-1">测试设备</h5>
                <p class="text-sm text-gray-600">各型号iPhone/iPad</p>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-2xl mb-2">📺</div>
                <h5 class="font-semibold mb-1">展示设备</h5>
                <p class="text-sm text-gray-600">4K投影仪</p>
              </div>
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import HeaderView from './HeaderView.vue'
import CarouselView from './CarouselView.vue'
import { useRouter } from 'vue-router'

// 路由导航
const router = useRouter()

const goToAwards = () => {
  router.push('/awards')
}
</script>

<style scoped>
/* 自定义样式 */
.carousel-container {
  margin: 2rem auto;
  width: 100%;
  max-width: 60rem;
}
</style>
