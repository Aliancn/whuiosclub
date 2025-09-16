<template>
  <!-- app -->
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <HeaderView />
    
    <div class="join-us">
      <div class="container">
        <h1>来不及多说了！进群详谈！！</h1>
        <p>欢迎加入 iOS Club 的大家庭！🎉</p>
        <p>我们正在招募新成员，快加入我们的 QQ 群，参与我们的社团活动、学习编程、一起讨论项目吧！</p>


        <div class="group-info flex flex-col justify-center items-center">
          <img
            src="@/assets/img/new.png"
            alt="QQ群二维码"
            class="qr-code rounded-lg border border-gray-300 mx-auto"
          />
          <p class="mt-4 leading-relaxed text-3xl md:text-4xl text-primary text-center">招新QQ群号 : 806162657</p>
        </div>

        <p class="mt-6">使用 QQ 扫码，或通过群号直接加入我们！我们期待与你共同成长！😊</p>
        
        <!-- 返回按钮居中显示 -->
        <div class="mt-8">
          <!-- <n-button quaternary type="primary" size="large" @click="back"> 返回 </n-button> -->
          <NButton type="primary" size="large" @click="back"> 返回 </NButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NButton } from 'naive-ui'
import HeaderView from './HeaderView.vue'

const router = useRouter()
const back = () => {
    router.push('/')
}
</script>

<style scoped>
.join-us {
  min-height: calc(100vh - 64px); /* 64px为Header高度，按实际调整 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #f4f4f9;
  color: #333;
}

.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center; /* 新增：让所有文字居中 */
}

.group-info {
  margin-top: 40px;
}

.qr-code {
  margin-top: 20px;
  max-width: 300px;
  width: 100%;
  height: auto;
}

/* 响应式优化 */
@media (max-width: 768px) {
  .group-info {
    flex-direction: column;
  }
}
</style>
