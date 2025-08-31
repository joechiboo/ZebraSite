<template>
  <div class="about-page">
    <h1>認識聯合</h1>
    
    <!-- 公司簡介區塊 -->
    <section class="company-intro">
      <div class="intro-content">
        <h2>大安聯合醫事檢驗所</h2>
        <p class="slogan">尊重生命‧追求真相‧回饋社會‧義不容辭</p>
        <div class="intro-text">
          <p>大安聯合醫事檢驗所成立於民國79年，專精於各項醫事檢驗服務，致力提供準確、快速、專業的檢驗結果。</p>
          <p>我們擁有完整的檢驗設備、專業的技術團隊，以及嚴格的品質管制系統，為醫療院所及民眾提供可信賴的檢驗服務。</p>
        </div>
      </div>
      <div class="intro-stats">
        <div class="stat-item">
          <div class="stat-number">35+</div>
          <div class="stat-label">年專業經驗</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">6</div>
          <div class="stat-label">服務據點</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1000+</div>
          <div class="stat-label">檢驗項目</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">24/7</div>
          <div class="stat-label">緊急檢驗</div>
        </div>
      </div>
    </section>

    <!-- 台灣地圖分部展示 -->
    <section class="branches-section">
      <h2>全台服務據點</h2>
      <p class="section-desc">六個分部為您提供就近便利的檢驗服務</p>
      <TaiwanMap />
    </section>

    <!-- 服務特色 -->
    <section class="features-section">
      <h2>服務特色</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>精準檢驗</h3>
          <p>採用國際標準檢驗方法，確保結果準確可靠</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>快速報告</h3>
          <p>完善的自動化系統，提供快速高效的檢驗報告</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔬</div>
          <h3>專業團隊</h3>
          <p>醫檢師持續教育訓練，維持最高專業水準</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>品質保證</h3>
          <p>通過多項國際認證，嚴格的品質管制系統</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h3>全台服務</h3>
          <p>六個據點覆蓋全台，提供就近便利服務</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>數位化服務</h3>
          <p>線上報告查詢，即時掌握檢驗結果</p>
        </div>
      </div>
    </section>

    <!-- 認證資訊 -->
    <section class="certifications-section">
      <h2>專業認證</h2>
      <div class="cert-grid">
        <div class="cert-item">
          <div class="cert-icon">🏆</div>
          <h4>ISO 15189認證</h4>
          <p>醫學實驗室品質和能力的特定要求</p>
        </div>
        <div class="cert-item">
          <div class="cert-icon">✅</div>
          <h4>TAF認證</h4>
          <p>財團法人全國認證基金會實驗室認證</p>
        </div>
        <div class="cert-item">
          <div class="cert-icon">🔒</div>
          <h4>衛福部許可</h4>
          <p>衛生福利部醫事檢驗所開業許可</p>
        </div>
        <div class="cert-item">
          <div class="cert-icon">📋</div>
          <h4>品質認證</h4>
          <p>多項國際品質管制計畫認證</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TaiwanMap from '../components/TaiwanMap.vue'

export default {
  name: 'About',
  components: {
    TaiwanMap
  }
}
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.about-page h1 {
  color: #2c5aa0;
  margin-bottom: 40px;
  font-size: 32px;
  text-align: center;
}

.about-page h2 {
  color: #2c5aa0;
  margin-bottom: 24px;
  font-size: 24px;
  text-align: center;
}

/* 公司簡介區塊 */
.company-intro {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.intro-content h2 {
  text-align: left;
  margin-bottom: 16px;
  font-size: 28px;
}

.slogan {
  color: #dc3545;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  padding: 16px;
  background: linear-gradient(135deg, #fff5f5, #ffebee);
  border-left: 4px solid #dc3545;
  border-radius: 4px;
}

.intro-text p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 16px;
}

.intro-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #2c5aa0, #4a7bc8);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(44, 90, 160, 0.3);
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.9;
}

/* 分部區塊 */
.branches-section {
  margin-bottom: 60px;
  background: white;
  border-radius: 12px;
  padding: 40px 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.section-desc {
  text-align: center;
  color: #666;
  font-size: 16px;
  margin-bottom: 40px;
}

/* 服務特色 */
.features-section {
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border-top: 4px solid #2c5aa0;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #2c5aa0, #4a7bc8);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  box-shadow: 0 4px 12px rgba(44, 90, 160, 0.3);
}

.feature-card h3 {
  color: #2c5aa0;
  margin-bottom: 12px;
  font-size: 20px;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 認證資訊 */
.certifications-section {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.cert-item {
  text-align: center;
  padding: 24px;
  background: linear-gradient(135deg, #f8fbff, #e3f2fd);
  border-radius: 8px;
  border: 1px solid #e3f2fd;
  transition: all 0.3s ease;
}

.cert-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 90, 160, 0.2);
}

.cert-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.cert-item h4 {
  color: #2c5aa0;
  margin-bottom: 8px;
  font-size: 16px;
}

.cert-item p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .company-intro {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px 20px;
  }
  
  .intro-stats {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  
  .stat-item {
    padding: 16px;
  }
  
  .stat-number {
    font-size: 24px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .cert-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>