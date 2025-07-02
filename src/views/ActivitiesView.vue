<template>
  <div>
    <!-- Header -->
    <div class="fixed top-0 left-0 w-full z-50">
      <HeaderView />
    </div>
    
    <!-- 主要内容 -->
    <main class="pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div class="container mx-auto px-6 py-12">
        <!-- 页面标题 -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">社团活动</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            丰富多彩的社团活动，让学习更有趣，让成长更精彩
          </p>
        </div>

        <!-- 活动统计 -->
        <section class="mb-16">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <n-card class="text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div class="text-gray-600">年度活动</div>
              </div>
            </n-card>
            <n-card class="text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div class="text-gray-600">参与人次</div>
              </div>
            </n-card>
            <n-card class="text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-orange-600 mb-2">12</div>
                <div class="text-gray-600">技术分享会</div>
              </div>
            </n-card>
            <n-card class="text-center">
              <div class="p-6">
                <div class="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div class="text-gray-600">实战项目</div>
              </div>
            </n-card>
          </div>
        </section>

        <!-- 活动类型 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">活动类型</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 技术分享会 -->
            <n-card hoverable class="h-full">
              <div class="p-6">
                <div class="text-center mb-4">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0V6a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1V4"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">技术分享会</h3>
                </div>
                <p class="text-gray-600 mb-4 text-center">定期举办iOS开发技术分享，涵盖Swift、UIKit、SwiftUI等热门技术</p>
                <div class="space-y-2">
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    每月2-3次
                  </div>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    计算机学院
                  </div>
                </div>
              </div>
            </n-card>

            <!-- 编程马拉松 -->
            <n-card hoverable class="h-full">
              <div class="p-6">
                <div class="text-center mb-4">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">编程马拉松</h3>
                </div>
                <p class="text-gray-600 mb-4 text-center">24小时不间断编程挑战，团队协作完成创新项目</p>
                <div class="space-y-2">
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    24小时挑战
                  </div>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    团队合作
                  </div>
                </div>
              </div>
            </n-card>

            <!-- 项目实战 -->
            <n-card hoverable class="h-full">
              <div class="p-6">
                <div class="text-center mb-4">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">项目实战</h3>
                </div>
                <p class="text-gray-600 mb-4 text-center">真实项目开发体验，从需求分析到上线发布的完整流程</p>
                <div class="space-y-2">
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    真实项目
                  </div>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    导师指导
                  </div>
                </div>
              </div>
            </n-card>

            <!-- 企业参访 -->
            <n-card hoverable class="h-full">
              <div class="p-6">
                <div class="text-center mb-4">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H7m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">企业参访</h3>
                </div>
                <p class="text-gray-600 mb-4 text-center">走进知名互联网公司，了解行业前沿技术和职业发展</p>
                <div class="space-y-2">
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                    </svg>
                    知名企业
                  </div>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    职业规划
                  </div>
                </div>
              </div>
            </n-card>

            <!-- 新手训练营 -->
            <n-card hoverable class="h-full">
              <div class="p-6">
                <div class="text-center mb-4">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">新手训练营</h3>
                </div>
                <p class="text-gray-600 mb-4 text-center">专为iOS开发新手设计的系统化培训课程</p>
                <div class="space-y-2">
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    8周系统课程
                  </div>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    零基础友好
                  </div>
                </div>
              </div>
            </n-card>

            <!-- 社交活动 -->
            <n-card hoverable class="h-full">
              <div class="p-6">
                <div class="text-center mb-4">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">社交活动</h3>
                </div>
                <p class="text-gray-600 mb-4 text-center">团建活动、聚餐、游戏竞赛等，增进成员间的友谊</p>
                <div class="space-y-2">
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    团队建设
                  </div>
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    友谊第一
                  </div>
                </div>
              </div>
            </n-card>
          </div>
        </section>

        <!-- 近期活动 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">近期活动</h2>
          <div class="space-y-6">
            <n-card hoverable>
              <div class="p-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">SwiftUI 实战分享会</h3>
                    <p class="text-gray-600">深入探讨SwiftUI的高级用法，分享项目实战经验</p>
                  </div>
                  <div class="mt-4 md:mt-0">
                    <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">本周六</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    7月6日 14:00-16:00
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    计算机学院301教室
                  </div>
                </div>
              </div>
            </n-card>

            <n-card hoverable>
              <div class="p-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">夏季编程马拉松</h3>
                    <p class="text-gray-600">24小时编程挑战，主题"智能校园助手"</p>
                  </div>
                  <div class="mt-4 md:mt-0">
                    <span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">报名中</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    7月13-14日
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    限20个团队
                  </div>
                </div>
              </div>
            </n-card>

            <n-card hoverable>
              <div class="p-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">苹果公司武汉研发中心参访</h3>
                    <p class="text-gray-600">深度了解苹果的研发文化和iOS生态系统</p>
                  </div>
                  <div class="mt-4 md:mt-0">
                    <span class="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">筹备中</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    8月中旬
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    限15人
                  </div>
                </div>
              </div>
            </n-card>
          </div>
        </section>

        <!-- 活动回顾 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">精彩回顾</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <n-card hoverable>
              <img src="@/assets/img/sucai1.png" alt="活动照片" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">春季技术分享会</h3>
                <p class="text-gray-600 text-sm">邀请到了苹果公司工程师分享最新的iOS开发技术</p>
              </div>
            </n-card>

            <n-card hoverable>
              <img src="@/assets/img/develop.png" alt="活动照片" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">编程马拉松获奖作品</h3>
                <p class="text-gray-600 text-sm">同学们开发的智能学习助手获得了一等奖</p>
              </div>
            </n-card>

            <n-card hoverable>
              <img src="@/assets/img/collection.jpg" alt="活动照片" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">企业参访合影</h3>
                <p class="text-gray-600 text-sm">参访腾讯武汉研发中心，了解企业级iOS开发</p>
              </div>
            </n-card>
          </div>
        </section>

        <!-- 行动号召 -->
        <section class="text-center">
          <n-card class="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
            <div class="p-12">
              <h2 class="text-3xl font-bold mb-4">参与精彩活动</h2>
              <p class="text-xl mb-8 opacity-90">与志同道合的伙伴一起学习、成长、创新</p>
              <div class="space-x-4">
                <n-button size="large" strong @click="goToJoin" class="bg-white text-purple-600 hover:bg-gray-100">
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
  name: 'ActivitiesView',
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
