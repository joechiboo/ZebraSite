<template>
  <aside class="sidebar">
    <router-link to="/" class="logo-section">
      <div class="logo-design">
        <div class="ucl-logo">
          <span class="letter-u">U</span><span class="letter-c">C</span><span class="letter-l">L</span>
          <span class="clover">🍀</span>
        </div>
      </div>
      <h1>大安聯合醫事檢驗所</h1>
      <p class="logo-subtitle">Union Clinical Laboratory</p>
    </router-link>
    
    <div class="menu-section">
      <h3>主要功能</h3>
      <ul>
        <li><router-link to="/news">聯合訊息</router-link></li>
        <li><router-link to="/knowledge">知識庫</router-link></li>
        <li><router-link to="/about">認識聯合</router-link></li>
        <li><router-link to="/careers">人才招募</router-link></li>
        <li><router-link to="/login">醫療院所登入</router-link></li>
      </ul>
    </div>
    
    <div class="menu-section">
      <div class="section-header">
        <h3>檢驗項目</h3>
      </div>
      <div class="search-box">
        <input type="text" placeholder="搜尋檢驗項目..." class="search-input" />
        <button class="search-btn">🔍</button>
      </div>
      <ul>
        <li><router-link to="/services">檢驗服務總覽</router-link></li>
      </ul>
    </div>
    
    <div class="menu-section">
      <h3>相關連結</h3>
      <ul>
        <li><a href="https://www.uclcloud.com.tw/" target="_blank">會員報告查詢</a></li>
        <li><a href="https://www.hpa.gov.tw/Home/Index.aspx" target="_blank">衛生福利部 國民健康署</a></li>
        <li><a href="https://www.cdc.gov.tw/" target="_blank">衛生福利部 疾病管制署</a></li>
        <li><a href="https://www.ha.org.hk/visitor/ha_index.asp?Lang=CHIB5" target="_blank">醫院管理局</a></li>
        <li><a href="https://www.nhi.gov.tw/ch/mp-1.html" target="_blank">中央健康保險署</a></li>
        <li><a href="https://www.mohw.gov.tw/mp-1.html" target="_blank">衛生福利部</a></li>
        <li><a href="https://upc.ucl.com.tw/reservation" target="_blank">聯準診所</a></li>
        <li><a href="https://en.ucl.com.tw/" target="_blank">English Version</a></li>
        <li><a href="https://www.cyt-inc.com/" target="_blank">健曄醫康</a></li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  background: #f8f9fa;
  border-right: 1px solid #ddd;
  padding: 20px;
  min-height: 100vh;
  overflow-y: auto;
}

.logo-section {
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 20px 0 30px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  transition: background 0.3s;
}

.logo-section:hover {
  background: rgba(44, 90, 160, 0.05);
}

.logo-design {
  margin-bottom: 0;
}

.ucl-logo {
  position: relative;
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Times New Roman', serif;
  font-style: italic;
}

.letter-u {
  color: #2c5aa0;
}

.letter-c {
  color: #28a745;
}

.letter-l {
  color: #dc3545;
}

.clover {
  margin-left: 2px;
  font-size: 16px;
  color: #28a745;
}

.logo-section h1 {
  font-size: 16px;
  color: #2c5aa0;
  margin: 0;
  line-height: 1.3;
  font-family: '標楷體', 'DFKai-SB', serif;
}

.logo-subtitle {
  font-size: 12px;
  color: #666;
  margin: 5px 0 0 0;
  font-family: 'Times New Roman', serif;
  font-style: italic;
}

.section-header {
  margin-bottom: 15px;
}

.section-header h3 {
  margin: 0;
}

.search-box {
  display: flex;
  margin-bottom: 15px;
}

.search-input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 13px;
  border-right: none;
}

.search-input:focus {
  outline: none;
  border-color: #2c5aa0;
}

.search-btn {
  background: #2c5aa0;
  color: white;
  border: 1px solid #2c5aa0;
  border-radius: 0 4px 4px 0;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #1e3f73;
}

.menu-section {
  margin-bottom: 30px;
}

.menu-section h3 {
  color: #2c5aa0;
  font-size: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #2c5aa0;
}

.menu-section ul {
  list-style: none;
}

.menu-section li {
  margin-bottom: 8px;
}

.menu-section a {
  color: #666;
  text-decoration: none;
  padding: 6px 12px;
  display: block;
  border-radius: 4px;
  transition: all 0.3s;
}

.menu-section a:hover {
  background: #2c5aa0;
  color: white;
}


@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}</style>