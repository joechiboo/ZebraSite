<template>
  <div class="home">
    <Marquee />
    
    <section class="hero">
      <h2>專業醫事檢驗服務</h2>
      <p>尊重生命‧追求真相‧回饋社會‧義不容辭</p>
    </section>

    <div class="content-grid">
      <section class="info-section">
        <h3>會員訊息</h3>
        <div class="info-content">
          <p>• 採檢送檢注意事項</p>
          <p>• 危險數據一覽表</p>
          <p>• 一般民眾檢驗單及抽血檢驗須知</p>
          <p>• 醫療院所檢驗單及送檢須知</p>
          <p>• 檢體採集及處理--檢體可補加測項目及時間</p>
        </div>
      </section>

      <section class="info-section">
        <h3>聯合訊息</h3>
        <div class="info-content">
          <p><span class="code">455</span> 檢驗項目Anti-BMZ基底膜帶抗體、Anti-ICS Ab細胞間質抗體改為大安聯合自行操作</p>
          <p><span class="code">454</span> 檢驗項目Cortisol皮質素免疫分析變更參考區間</p>
          <p><span class="code">453</span> 114年10月11日休假不營業，新增CYP2C19基因檢測</p>
          <p><span class="code">452</span> 114年08月23日公投選舉休假，HDL-C參考區間變更</p>
          <p><span class="code">451</span> 血清酮體定量分析恢復操作，本周氏蛋白試驗停止服務</p>
        </div>
        <div class="show-more">
          <router-link to="/news">顯示更多 →</router-link>
        </div>
      </section>

      <section class="info-section">
        <h3>相關網站重要消息</h3>
        <div class="info-content">
          <p>📢 衛福部最新檢驗規範更新</p>
          <p>🏥 醫療機構評鑑相關資訊</p>
          <p>🔬 實驗室品質管制指引</p>
          <p>📋 檢驗項目健保給付異動</p>
          <p>⚡ 緊急檢驗作業規範</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Marquee from '../components/Marquee.vue'

export default {
  name: 'Home',
  components: {
    Marquee
  }
}
</script>

<style scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #2c5aa0 0%, #4a7bc8 100%);
  color: white;
  border-radius: 8px;
  margin: 20px 0;
}

.hero h2 {
  font-size: 32px;
  margin-bottom: 16px;
}

.hero p {
  font-size: 18px;
  opacity: 0.9;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.info-section {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-top: 4px solid #2c5aa0;
}

.info-section h3 {
  color: #2c5aa0;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
}

.info-content p {
  color: #555;
  margin-bottom: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  line-height: 1.6;
}

.info-content p:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.code {
  background: #e3f2fd;
  color: #1976d2;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 12px;
  margin-right: 8px;
}

.show-more {
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
}

.show-more a {
  display: inline-block;
  color: #2c5aa0;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid #2c5aa0;
  border-radius: 20px;
  transition: all 0.3s;
  background: transparent;
}

.show-more a:hover {
  background: #2c5aa0;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(44, 90, 160, 0.3);
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>