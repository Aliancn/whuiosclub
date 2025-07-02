<template>
  <div>
    <!-- Header -->
    <div class="fixed top-0 left-0 w-full z-50">
      <HeaderView />
    </div>
    
    <!-- 主要内容 -->
    <main class="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div class="container mx-auto px-6 py-12">
        <!-- 页面标题 -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">留言板</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            分享你的想法，记录学习心得，与社团成员互动交流
          </p>
        </div>

        <!-- 留言统计 -->
        <section class="mb-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <n-card class="text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-blue-600 mb-2">{{ totalMessages }}</div>
                <div class="text-gray-600">总留言数</div>
              </div>
            </n-card>
            <n-card class="text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-green-600 mb-2">{{ todayMessages }}</div>
                <div class="text-gray-600">今日留言</div>
              </div>
            </n-card>
            <n-card class="text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-purple-600 mb-2">{{ activeUsers }}</div>
                <div class="text-gray-600">活跃用户</div>
              </div>
            </n-card>
          </div>
        </section>

        <!-- 发表留言区域 -->
        <section class="mb-12">
          <n-card>
            <div class="p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">发表留言</h2>
              <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">昵称</label>
                    <n-input 
                      v-model:value="newMessage.name" 
                      placeholder="请输入您的昵称"
                      size="large"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">邮箱（可选）</label>
                    <n-input 
                      v-model:value="newMessage.email" 
                      placeholder="your@email.com"
                      size="large"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">留言内容</label>
                  <n-input
                    v-model:value="newMessage.content"
                    type="textarea"
                    placeholder="分享您的想法、建议或者学习心得..."
                    :rows="4"
                    size="large"
                  />
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-gray-500">
                    请文明发言，共同维护良好的交流环境
                  </div>
                  <n-button 
                    type="primary" 
                    size="large" 
                    strong
                    @click="submitMessage"
                    :disabled="!newMessage.name || !newMessage.content"
                  >
                    发表留言
                  </n-button>
                </div>
              </div>
            </div>
          </n-card>
        </section>

        <!-- 留言分类过滤 -->
        <section class="mb-8">
          <div class="flex flex-wrap gap-4 justify-center">
            <n-button 
              :type="currentFilter === 'all' ? 'primary' : 'default'"
              @click="setFilter('all')"
            >
              全部留言
            </n-button>
            <n-button 
              :type="currentFilter === 'study' ? 'primary' : 'default'"
              @click="setFilter('study')"
            >
              学习心得
            </n-button>
            <n-button 
              :type="currentFilter === 'suggestion' ? 'primary' : 'default'"
              @click="setFilter('suggestion')"
            >
              建议反馈
            </n-button>
            <n-button 
              :type="currentFilter === 'question' ? 'primary' : 'default'"
              @click="setFilter('question')"
            >
              问题求助
            </n-button>
            <n-button 
              :type="currentFilter === 'share' ? 'primary' : 'default'"
              @click="setFilter('share')"
            >
              资源分享
            </n-button>
          </div>
        </section>

        <!-- 留言列表 -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">留言列表</h2>
          <div class="space-y-6">
            <n-card 
              v-for="message in filteredMessages" 
              :key="message.id"
              hoverable
              class="transition-all duration-200"
            >
              <div class="p-6">
                <!-- 留言头部 -->
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {{ message.name.charAt(0).toUpperCase() }}
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">{{ message.name }}</h3>
                      <p class="text-sm text-gray-500">{{ formatDate(message.date) }}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span 
                      class="px-2 py-1 text-xs font-medium rounded-full"
                      :class="getCategoryStyle(message.category)"
                    >
                      {{ getCategoryText(message.category) }}
                    </span>
                  </div>
                </div>

                <!-- 留言内容 -->
                <div class="mb-4">
                  <p class="text-gray-700 leading-relaxed">{{ message.content }}</p>
                </div>

                <!-- 留言底部 -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="flex items-center space-x-4 text-sm text-gray-500">
                    <button 
                      class="flex items-center space-x-1 hover:text-blue-600 transition"
                      @click="toggleLike(message.id)"
                    >
                      <svg 
                        class="w-4 h-4" 
                        :class="message.liked ? 'text-red-500 fill-current' : ''"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <span>{{ message.likes }}</span>
                    </button>
                    <button class="flex items-center space-x-1 hover:text-blue-600 transition">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                      <span>回复</span>
                    </button>
                  </div>
                  <div class="text-xs text-gray-400">
                    #{{ message.id }}
                  </div>
                </div>
              </div>
            </n-card>
          </div>

          <!-- 加载更多 -->
          <div class="text-center mt-8">
            <n-button size="large" @click="loadMore" :disabled="isLoading">
              {{ isLoading ? '加载中...' : '加载更多' }}
            </n-button>
          </div>
        </section>

        <!-- 留言规则 -->
        <section class="mb-16">
          <n-card>
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-4">留言规则</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="text-lg font-semibold text-green-700 mb-3">✓ 鼓励发言</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li>• 分享学习心得和技术经验</li>
                    <li>• 提出建设性的意见和建议</li>
                    <li>• 寻求技术问题的帮助</li>
                    <li>• 分享有用的学习资源</li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-red-700 mb-3">✗ 禁止行为</h3>
                  <ul class="space-y-2 text-gray-600">
                    <li>• 发布与社团无关的内容</li>
                    <li>• 使用不文明或攻击性语言</li>
                    <li>• 发布广告或垃圾信息</li>
                    <li>• 恶意刷屏或重复发言</li>
                  </ul>
                </div>
              </div>
            </div>
          </n-card>
        </section>

        <!-- 行动号召 -->
        <section class="text-center">
          <n-card class="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <div class="p-12">
              <h2 class="text-3xl font-bold mb-4">加入讨论</h2>
              <p class="text-xl mb-8 opacity-90">与更多iOS开发爱好者交流学习</p>
              <div class="space-x-4">
                <n-button size="large" strong @click="goToJoin" class="bg-white text-green-600 hover:bg-gray-100">
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
import { NCard, NButton, NInput } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

export default {
  name: 'MessageBoardView',
  components: {
    HeaderView,
    FooterView,
    NCard,
    NButton,
    NInput
  },
  setup() {
    const router = useRouter()
    
    // 响应式数据
    const totalMessages = ref(127)
    const todayMessages = ref(8)
    const activeUsers = ref(23)
    const currentFilter = ref('all')
    const isLoading = ref(false)
    
    // 新留言数据
    const newMessage = ref({
      name: '',
      email: '',
      content: ''
    })
    
    // 示例留言数据
    const messages = ref([
      {
        id: 127,
        name: '张同学',
        content: '刚学完SwiftUI的第一个项目，感觉声明式编程真的很有趣！比起传统的UIKit，代码更简洁易懂。有没有同学一起交流SwiftUI的学习心得？',
        date: new Date('2024-07-02T10:30:00'),
        category: 'study',
        likes: 12,
        liked: false
      },
      {
        id: 126,
        name: '李开发',
        content: '建议社团可以组织一次关于iOS性能优化的技术分享会，最近在做项目遇到了一些性能瓶颈，希望能学到一些实用的优化技巧。',
        date: new Date('2024-07-02T09:15:00'),
        category: 'suggestion',
        likes: 8,
        liked: false
      },
      {
        id: 125,
        name: '王小明',
        content: '有个关于Core Data的问题想请教大家：在处理大量数据时，如何优化查询性能？我现在的应用在加载数据时有点卡顿。',
        date: new Date('2024-07-01T16:45:00'),
        category: 'question',
        likes: 5,
        liked: false
      },
      {
        id: 124,
        name: '陈设计师',
        content: '分享一个很棒的iOS设计资源网站：iOS Design Guidelines。里面有很多苹果官方的设计规范和最佳实践，对UI设计很有帮助！',
        date: new Date('2024-07-01T14:20:00'),
        category: 'share',
        likes: 15,
        liked: true
      },
      {
        id: 123,
        name: '刘学长',
        content: '参加了上周的编程马拉松，收获很大！不仅学到了很多新技术，还认识了很多志同道合的朋友。团队协作的经验对我来说很宝贵。',
        date: new Date('2024-06-30T11:30:00'),
        category: 'study',
        likes: 20,
        liked: false
      },
      {
        id: 122,
        name: '赵新手',
        content: '刚加入社团的萌新报到！之前一直在学Web开发，现在想转iOS。请问有什么好的学习路径推荐吗？',
        date: new Date('2024-06-30T09:10:00'),
        category: 'question',
        likes: 6,
        liked: false
      }
    ])
    
    // 计算属性
    const filteredMessages = computed(() => {
      if (currentFilter.value === 'all') {
        return messages.value
      }
      return messages.value.filter(msg => msg.category === currentFilter.value)
    })
    
    // 方法
    const setFilter = (filter) => {
      currentFilter.value = filter
    }
    
    const submitMessage = () => {
      if (!newMessage.value.name || !newMessage.value.content) {
        return
      }
      
      const message = {
        id: Date.now(),
        name: newMessage.value.name,
        content: newMessage.value.content,
        date: new Date(),
        category: 'study', // 默认分类
        likes: 0,
        liked: false
      }
      
      messages.value.unshift(message)
      totalMessages.value++
      todayMessages.value++
      
      // 重置表单
      newMessage.value = {
        name: '',
        email: '',
        content: ''
      }
    }
    
    const toggleLike = (messageId) => {
      const message = messages.value.find(msg => msg.id === messageId)
      if (message) {
        if (message.liked) {
          message.likes--
          message.liked = false
        } else {
          message.likes++
          message.liked = true
        }
      }
    }
    
    const loadMore = () => {
      isLoading.value = true
      // 模拟加载更多数据
      setTimeout(() => {
        isLoading.value = false
      }, 1000)
    }
    
    const formatDate = (date) => {
      const now = new Date()
      const diff = now - date
      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)
      
      if (minutes < 1) return '刚刚'
      if (minutes < 60) return `${minutes}分钟前`
      if (hours < 24) return `${hours}小时前`
      if (days < 7) return `${days}天前`
      
      return date.toLocaleDateString('zh-CN')
    }
    
    const getCategoryText = (category) => {
      const categoryMap = {
        'study': '学习心得',
        'suggestion': '建议反馈',
        'question': '问题求助',
        'share': '资源分享'
      }
      return categoryMap[category] || '其他'
    }
    
    const getCategoryStyle = (category) => {
      const styleMap = {
        'study': 'bg-blue-100 text-blue-800',
        'suggestion': 'bg-green-100 text-green-800',
        'question': 'bg-orange-100 text-orange-800',
        'share': 'bg-purple-100 text-purple-800'
      }
      return styleMap[category] || 'bg-gray-100 text-gray-800'
    }
    
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
      totalMessages,
      todayMessages,
      activeUsers,
      currentFilter,
      isLoading,
      newMessage,
      messages,
      filteredMessages,
      setFilter,
      submitMessage,
      toggleLike,
      loadMore,
      formatDate,
      getCategoryText,
      getCategoryStyle,
      goToJoin,
      goBack
    }
  }
}
</script>

<style scoped>
/* 可以添加一些自定义样式 */
</style>
