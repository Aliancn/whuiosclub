<template>
  <!-- app -->
  <footer class="footer">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <div class="container">
      <!-- iOS Club 信息 -->
      <div class="footer-column lg:ml-4">
        <h4>iOS Club</h4>
        <p>WUHAN University</p>
      </div>
      <!-- 我们的活动 -->
      <div class="footer-column">
        <h4>Our Activities</h4>
        <ul>
          <li>社团课程</li>
          <li>活动相簿</li>
          <li>社团活动</li>
        </ul>
      </div>
      <!-- 我们的社团 -->
      <div class="footer-column">
        <h4>Our Club</h4>
        <ul>
          <li>历届社团成员</li>
          <li>竞赛得奖</li>
          <li>相关单位</li>
        </ul>
      </div>
      <!-- 社区链接 -->
      <div class="footer-column">
        <h4>Community</h4>
        <ul>
          <li><i class="fas fa-envelope"></i> E-mail</li>
          <li><i class="fab fa-discord"></i> Discord</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>iOS Club 2017 - 2024 © All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>

<style scoped>
.footer {
  background-color: #5a748a;
  padding: 40px 0;
  color: white;
  text-align: left;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  min-width: 150px;
  margin-right: 20px;
}

.footer-column h4 {
  margin-bottom: 15px;
  font-size: 18px;
  color: #f0f0f0; /* 改为更亮的颜色，适合深色背景 */
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li i {
  margin-right: 8px;
}

.footer-bottom {
  text-align: center;
  margin-top: 28px;
  font-size: 14px;
  color: white;
}

/* 响应式优化 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .footer-column {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
