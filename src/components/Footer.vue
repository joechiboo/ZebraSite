<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>大安聯合醫事檢驗所</h4>
          <p>專業、準確、快速的醫事檢驗服務</p>
        </div>
        <div class="footer-section">
          <h4>聯絡資訊</h4>
          <p>地址：10665 台北市大安區<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;復興南路二段151巷33號</p>
          <p>電話：02-27049977</p>
          <p>傳真：02-27091974</p>
          <p>Email：info@ucl.com.tw | <router-link to="/contact" class="inline-contact-link">聯絡我們</router-link></p>
        </div>
        <div class="footer-section">
          <h4>營業時間</h4>
          <p>週一至週六 08:00-21:00</p>
          <p>週日公休</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 大安聯合醫事檢驗所 版權所有</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c5aa0;
  color: white;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h4 {
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}

.inline-contact-link {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.inline-contact-link:hover {
  color: white;
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid #456bc4;
  padding-top: 20px;
  text-align: center;
  color: #ccc;
}</style>