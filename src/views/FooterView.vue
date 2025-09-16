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
        <p>
          <a href="https://www.whu.edu.cn" target="_blank" rel="noopener" class="footer-link">
            WUHAN University
          </a>
        </p>
        <p>
          <a href="https://jluios.club/" target="_blank" rel="noopener" class="footer-link">
            JLU iOS Club
          </a>
        </p>
      </div>
      <!-- 我们的活动 -->
      <div class="footer-column">
        <h4>Our Activities</h4>
        <ul>
          <li><a href="/courses" class="footer-link">社团课程</a></li>
          <li><a href="/album" class="footer-link">活动相簿</a></li>
          <li><a href="/activities" class="footer-link">社团活动</a></li>
        </ul>
      </div>
      <!-- 我们的社团 -->
      <div class="footer-column">
        <h4>Our Club</h4>
        <ul>
          <li><a href="/awards" class="footer-link">竞赛得奖</a></li>
          <li><a href="/partners" class="footer-link">相关单位</a></li>
        </ul>
      </div>
      <!-- 社区链接 -->
      <div class="footer-column">
        <h4>Community</h4>
        <ul>
          <li>
            <a href="mailto:your@email.com" class="footer-link">
              <i class="fas fa-envelope"></i> E-mail
            </a>
          </li>
          <li>
            <a href="https://discord.com/" target="_blank" rel="noopener" class="footer-link">
              <i class="fab fa-discord"></i> Discord
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>iOS Club 2017 - 2026 © All rights reserved</p>
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

.footer-link {
  color: #f0f0f0;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #ffd700;
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
