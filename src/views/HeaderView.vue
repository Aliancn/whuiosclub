<template>
  <!-- app -->
  <header
    class="flex items-center justify-between px-6 py-1 shadow-lg w-full backdrop-blur bg-transparent"
  >
    <!-- Logo、搜索和标题 -->
    <div class="flex items-center flex-shrink-0 space-x-3">
      <a href="/" class="cursor-pointer flex items-center">
        <img src="/favicon.ico" alt="iOS Club Icon" class="w-6 h-6 mr-2" />
        <n-gradient-text
          class="text-lg font-bold"
          :gradient="{
            deg: 180,
            from: 'rgb(255, 146, 106)' /* 橙色 */,
            to: 'rgb(102, 126, 234)' /* 蓝紫色 */
          }"
        >
          WHU iOS Club
        </n-gradient-text>
      </a>
      
      <!-- 搜索按钮 -->
      <button 
        @click="openSearch"
        class="flex items-center px-3 py-1 text-sm text-gray-600 bg-gray-100 bg-opacity-70 rounded-full hover:bg-opacity-90 transition-all duration-200"
        title="快速导航 (⌘+K)"
      >
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        快速导航
        <span class="ml-2 text-xs text-gray-500">⌘K</span>
      </button>
    </div>

    <!-- 移动端菜单按钮（汉堡按钮） -->
    <button @click="toggleMenu" class="block lg:hidden text-primary focus:outline-none ml-auto">
      <svg
        class="w-6 h-6"
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
      class="lg:flex lg:items-center lg:ml-auto"
    >
      <ul
        class="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 items-center mt-4 lg:mt-0"
      >
        <li>
          <a href="/" class="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 drop-shadow-sm">主页</a>
        </li>
        
        <!-- 关于下拉菜单 -->
        <li class="relative group">
          <button 
            class="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center drop-shadow-sm"
            @click="toggleAboutMenu"
          >
            社团
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- 下拉菜单 -->
          <div 
            v-show="showAboutMenu" 
            class="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          >
            <a href="/awards" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg">荣誉奖项</a>
            <a href="/about-us" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">了解我们</a>
            <a href="#" @click="join" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-b-lg">加入我们</a>
          </div>
        </li>
        
        <!-- 相关下拉菜单 -->
        <li class="relative group">
          <button 
            class="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center drop-shadow-sm"
            @click="toggleRelatedMenu"
          >
            相关
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- 下拉菜单 -->
          <div 
            v-show="showRelatedMenu" 
            class="absolute top-full right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          >
            <a href="/competition" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg">竞赛介绍</a>
            <a href="/activities" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">社团活动</a>
            <a href="/message-board" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg">留言板</a>
          </div>
        </li>
        
        <!-- GitHub 按钮 -->
        <li>
          <a 
            href="https://github.com/whu-iosclub" 
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 drop-shadow-sm"
            title="访问我们的 GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <!-- 搜索模态框 -->
  <div 
    v-if="showSearch" 
    class="fixed inset-0 z-[9999] bg-black bg-opacity-50 backdrop-blur-sm"
    @click="closeSearch"
  >
    <div class="flex items-start justify-center pt-16 px-4">
      <div 
        class="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        @click.stop
      >
        <!-- 搜索头部 -->
        <div class="flex items-center px-6 py-4 border-b border-gray-200">
          <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="搜索内容、页面、功能..."
            class="flex-1 text-lg outline-none placeholder-gray-400"
            @keydown.escape="closeSearch"
            @keydown.enter="performSearch"
            @input="handleSearchInput"
          />
          <button 
            @click="closeSearch"
            class="ml-3 text-gray-400 hover:text-gray-600 transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- 搜索结果/建议 -->
        <div class="max-h-96 overflow-y-auto">
          <div v-if="searchQuery === ''" class="p-6">
            <h3 class="text-sm font-semibold text-gray-900 mb-3">快速导航</h3>
            <div class="space-y-2">
              <button 
                @click="navigateTo('/')"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <div>
                  <div class="font-medium">主页</div>
                  <div class="text-xs text-gray-500">社团首页和介绍</div>
                </div>
              </button>
              <button 
                @click="navigateTo('/about-us')"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <div>
                  <div class="font-medium">了解我们</div>
                  <div class="text-xs text-gray-500">社团成员和活动空间</div>
                </div>
              </button>
              <button 
                @click="navigateTo('/awards')"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <div>
                  <div class="font-medium">荣誉奖项</div>
                  <div class="text-xs text-gray-500">社团获奖展示</div>
                </div>
              </button>
              <button 
                @click="navigateTo('/competition')"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <div>
                  <div class="font-medium">竞赛介绍</div>
                  <div class="text-xs text-gray-500">iOS开发竞赛信息</div>
                </div>
              </button>
              <button 
                @click="navigateTo('/activities')"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <div class="font-medium">社团活动</div>
                  <div class="text-xs text-gray-500">技术分享和实践活动</div>
                </div>
              </button>
              <button 
                @click="navigateTo('/message-board')"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <div>
                  <div class="font-medium">留言板</div>
                  <div class="text-xs text-gray-500">成员交流和讨论</div>
                </div>
              </button>
              <button 
                @click="navigateTo('/join')"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                <div>
                  <div class="font-medium">加入我们</div>
                  <div class="text-xs text-gray-500">成为社团新成员</div>
                </div>
              </button>
            </div>
            
            <h3 class="text-sm font-semibold text-gray-900 mb-3 mt-6">热门搜索</h3>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="keyword in searchHistory" 
                :key="keyword"
                @click="searchKeyword(keyword)"
                class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
              >
                {{ keyword }}
              </button>
            </div>
            
            <h3 class="text-sm font-semibold text-gray-900 mb-3 mt-6">快速操作</h3>
            <div class="space-y-2">
              <button 
                @click="openGithub"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
              >
                <svg class="w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <div>
                  <div class="font-medium">访问 GitHub</div>
                  <div class="text-xs text-gray-500">查看项目代码</div>
                </div>
              </button>
            </div>
          </div>

          <div v-else-if="searchResults.length > 0" class="p-6">
            <h3 class="text-sm font-semibold text-gray-900 mb-3">搜索结果 ({{ searchResults.length }})</h3>
            <div class="space-y-3">
              <button 
                v-for="result in searchResults" 
                :key="result.path"
                @click="navigateTo(result.path)"
                class="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                <div class="font-medium text-gray-900 mb-1" v-html="highlightSearchTerm(result.title, searchQuery)"></div>
                <div class="text-sm text-gray-600 mb-2" v-html="highlightSearchTerm(result.snippet, searchQuery)"></div>
                <div class="text-xs text-blue-600">{{ result.path }}</div>
              </button>
            </div>
          </div>

          <div v-else-if="searchQuery.trim()" class="p-6">
            <h3 class="text-sm font-semibold text-gray-900 mb-3">搜索结果</h3>
            <div class="text-gray-500 text-center py-8">
              <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <div class="text-sm">未找到包含 "{{ searchQuery }}" 的内容</div>
              <div class="text-xs mt-1">尝试使用其他关键词搜索</div>
            </div>
          </div>
        </div>

        <!-- 搜索底部提示 -->
        <div class="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <kbd class="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↵</kbd>
              <span class="ml-1">搜索</span>
            </div>
            <div class="flex items-center">
              <kbd class="px-2 py-1 bg-white border border-gray-300 rounded text-xs">ESC</kbd>
              <span class="ml-1">关闭</span>
            </div>
            <div class="flex items-center">
              <kbd class="px-2 py-1 bg-white border border-gray-300 rounded text-xs">⌘K</kbd>
              <span class="ml-1">快捷键</span>
            </div>
          </div>
          <div class="text-gray-400">实时搜索所有页面内容</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NGradientText } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted, nextTick, defineExpose } from 'vue'

const router = useRouter()
const isMenuOpen = ref(false)
const showRelatedMenu = ref(false)
const showAboutMenu = ref(false)
const showSearch = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const searchResults = ref([])
const searchHistory = ref(['Swift', 'iOS开发', '社团活动', 'SwiftUI'])

const join = () => {
  router.push('/join')
  showAboutMenu.value = false // 关闭菜单
}

const openSearch = async () => {
  showSearch.value = true
  searchQuery.value = ''
  closeMenus()
  await nextTick()
  if (searchInput.value) {
    searchInput.value.focus()
  }
}

const closeSearch = () => {
  showSearch.value = false
  searchQuery.value = ''
  searchResults.value = []
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    // 执行搜索逻辑
    searchInPages(searchQuery.value.trim())
  }
}

const handleSearchInput = () => {
  if (searchQuery.value.trim()) {
    // 实时搜索
    searchInPages(searchQuery.value.trim())
  } else {
    // 清空搜索结果
    searchResults.value = []
  }
}

// 搜索功能实现
const searchInPages = (query) => {
  const results = []
  
  // 定义页面数据用于搜索
  const pagesData = [
    {
      title: '主页',
      path: '/',
      content: '创新 分享 成长 武汉大学 iOS Club 果粉聚集地 创意加油站 欢迎来到 WHU iOS Club 这里是一个充满创意与激情的社区 专注于探索 Apple iOS 生态系统的无限可能 无论你是刚接触 Swift 编程的小白 还是已经有丰富开发经验的高手 在这里 你都能找到志同道合的朋友 一起学习 交流 创造出令人惊叹的 iOS 应用',
      category: 'home'
    },
    {
      title: '了解我们',
      path: '/about-us',
      content: '社团成员 活动空间 竞赛得奖 相关单位 我们的团队 充满激情的iOS开发者 老师指导 学长学姐 同年级同学 共同学习进步 主活动室 讨论交流的温馨空间 设备先进 环境优美 社团获奖 各类竞赛中取得优异成绩 全国大学生程序设计竞赛 移动应用创新大赛 iOS开发挑战赛',
      category: 'about'
    },
    {
      title: '荣誉奖项',
      path: '/awards',
      content: '获奖证书 荣誉展示 全国一等奖 二等奖 三等奖 优秀奖 创新奖 技术奖 团队奖 个人奖 编程竞赛 设计比赛 创新大赛 学术研究',
      category: 'awards'
    },
    {
      title: '加入我们',
      path: '/join',
      content: '加入 WHU iOS Club QQ群 社团招新 报名方式 联系我们 扫码加群 新成员 招募 iOS开发 学习交流',
      category: 'join'
    },
    {
      title: '竞赛介绍',
      path: '/competition',
      content: '竞赛介绍 iOS开发竞赛 校内竞赛 全国性竞赛 企业挑战赛 编程比赛 应用设计 创新大赛 程序设计竞赛 移动应用创新赛 Swift编程 UIKit SwiftUI 获奖经验 技术分享 实战项目',
      category: 'competition'
    },
    {
      title: '社团活动',
      path: '/activities',
      content: '社团活动 技术分享会 编程马拉松 项目实战 企业参访 新手训练营 社交活动 SwiftUI实战 编程挑战 团队协作 职业规划 学习课程 团建活动 聚餐 游戏竞赛',
      category: 'activities'
    },
    {
      title: '留言板',
      path: '/message-board',
      content: '留言板 学习心得 建议反馈 问题求助 资源分享 技术交流 Swift SwiftUI Core Data iOS开发 编程马拉松 设计资源 学习路径 社团讨论',
      category: 'messageboard'
    }
  ]
  
  // 执行搜索
  const queryLower = query.toLowerCase()
  pagesData.forEach(page => {
    if (page.title.toLowerCase().includes(queryLower) || 
        page.content.toLowerCase().includes(queryLower)) {
      results.push({
        title: page.title,
        path: page.path,
        category: page.category,
        snippet: getSearchSnippet(page.content, query)
      })
    }
  })
  
  // 更新搜索结果
  searchResults.value = results
}

// 获取搜索片段
const getSearchSnippet = (content, query) => {
  const queryLower = query.toLowerCase()
  const contentLower = content.toLowerCase()
  const index = contentLower.indexOf(queryLower)
  
  if (index === -1) return content.substring(0, 100) + '...'
  
  const start = Math.max(0, index - 30)
  const end = Math.min(content.length, index + query.length + 30)
  const snippet = content.substring(start, end)
  
  return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '')
}

// 高亮搜索关键词
const highlightSearchTerm = (text, query) => {
  if (!query) return text
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>')
}

const navigateTo = (path) => {
  router.push(path)
  closeSearch()
}

const openGithub = () => {
  window.open('https://github.com/whu-iosclub', '_blank')
  closeSearch()
}

const searchKeyword = (keyword) => {
  searchQuery.value = keyword
  searchInPages(keyword)
}

// 键盘快捷键监听
const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    openSearch()
  }
  if (e.key === 'Escape' && showSearch.value) {
    closeSearch()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleRelatedMenu = () => {
  showRelatedMenu.value = !showRelatedMenu.value
  showAboutMenu.value = false // 关闭其他菜单
}

const toggleAboutMenu = () => {
  showAboutMenu.value = !showAboutMenu.value
  showRelatedMenu.value = false // 关闭其他菜单
}

// 点击外部关闭菜单
const closeMenus = () => {
  showRelatedMenu.value = false
  showAboutMenu.value = false
}

// 监听点击事件，点击外部时关闭菜单
document.addEventListener('click', (e) => {
  if (!e.target.closest('.relative.group')) {
    closeMenus()
  }
})

// 暴露方法给父组件
defineExpose({
  openSearch
})
</script>
