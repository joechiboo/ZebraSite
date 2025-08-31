<template>
  <div class="knowledge-page">
    <h1>知識庫</h1>
    
    <div class="category-tabs">
      <button 
        v-for="category in categories" 
        :key="category.id"
        @click="activeCategory = category.id"
        :class="['tab-btn', { active: activeCategory === category.id }]"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="knowledge-content">
      <div v-if="activeCategory === 'training'">
        <h2>月度教育訓練</h2>
        <div class="upload-section">
          <div class="upload-card">
            <h3>📤 上傳訓練簡報</h3>
            <p>支援格式：PDF, PPT, PPTX (最大 50MB)</p>
            <p class="admin-note">📝 管理功能：後台開發時啟用</p>
            <button class="upload-btn" disabled>選擇檔案 (開發中)</button>
          </div>
        </div>
        
        <div class="training-list">
          <div v-for="training in trainingFiles" :key="training.id" class="training-item">
            <div class="training-header">
              <span class="date">{{ training.date }}</span>
              <span class="month-tag">{{ training.month }}月份</span>
            </div>
            <h4>{{ training.title }}</h4>
            <p>{{ training.description }}</p>
            <div class="training-footer">
              <span class="file-info">{{ training.fileName }} ({{ training.fileSize }})</span>
              <div class="actions">
                <button @click="downloadFile(training)" class="download-btn">📥 下載</button>
                <button @click="viewFile(training)" class="view-btn">👁️ 預覽</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeCategory === 'professional'">
        <h2>專業資源</h2>
        <div class="resource-grid">
          <div v-for="resource in professionalResources" :key="resource.id" class="resource-card">
            <div class="resource-icon">{{ resource.icon }}</div>
            <h4>{{ resource.title }}</h4>
            <p>{{ resource.description }}</p>
            <a :href="resource.link" target="_blank" class="resource-link">查看資源 →</a>
          </div>
        </div>
      </div>

      <div v-if="activeCategory === 'medical'">
        <h2>醫學新知</h2>
        <div class="news-list">
          <div v-for="news in medicalNews" :key="news.id" class="news-item">
            <div class="news-header">
              <span class="date">{{ news.date }}</span>
              <span class="source">{{ news.source }}</span>
            </div>
            <h4>{{ news.title }}</h4>
            <p>{{ news.summary }}</p>
            <a :href="news.link" target="_blank" class="news-link">閱讀全文 →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Knowledge',
  data() {
    return {
      activeCategory: 'training',
      categories: [
        { id: 'training', name: '月度教育訓練' },
        { id: 'professional', name: '專業資源' },
        { id: 'medical', name: '醫學新知' }
      ],
      trainingFiles: [
        {
          id: 1,
          date: '2024-12-15',
          month: '12',
          title: '血液學檢驗新技術應用',
          description: '介紹最新血液學檢驗技術及其在臨床診斷中的應用',
          fileName: '2024_12_血液學檢驗新技術.pdf',
          fileSize: '12.5 MB',
          downloadUrl: '/files/training/2024_12_blood_analysis.pdf'
        },
        {
          id: 2,
          date: '2024-11-20',
          month: '11',
          title: '微生物檢驗品質控制',
          description: '微生物檢驗的品質控制要點及常見問題解析',
          fileName: '2024_11_微生物品控.pptx',
          fileSize: '8.2 MB',
          downloadUrl: '/files/training/2024_11_microbiology_qc.pptx'
        },
        {
          id: 3,
          date: '2024-10-18',
          month: '10',
          title: '生化檢驗異常值判讀',
          description: '生化檢驗異常結果的判讀技巧與臨床意義',
          fileName: '2024_10_生化異常判讀.pdf',
          fileSize: '15.7 MB',
          downloadUrl: '/files/training/2024_10_biochemistry.pdf'
        }
      ],
      professionalResources: [
        {
          id: 1,
          icon: '📋',
          title: '檢驗項目手冊',
          description: '完整的檢驗項目說明、參考值及注意事項',
          link: 'https://www.ucl.com.tw/manual'
        },
        {
          id: 2,
          icon: '🔬',
          title: '品質管制指引',
          description: '實驗室品質管制標準作業程序',
          link: 'https://www.ucl.com.tw/qc-guide'
        },
        {
          id: 3,
          icon: '📊',
          title: '檢驗數據解讀',
          description: '各項檢驗數據的臨床意義與判讀準則',
          link: 'https://www.ucl.com.tw/interpretation'
        },
        {
          id: 4,
          icon: '⚕️',
          title: '臨床應用指南',
          description: '檢驗項目在臨床診斷中的應用建議',
          link: 'https://www.ucl.com.tw/clinical-guide'
        }
      ],
      medicalNews: [
        {
          id: 1,
          date: '2024-12-20',
          source: '台灣醫學會',
          title: '新型冠狀病毒變異株檢測技術更新',
          summary: '最新的 COVID-19 變異株檢測方法及其在實驗室的應用...',
          link: 'https://www.tma.tw/covid-variants-2024'
        },
        {
          id: 2,
          date: '2024-12-18',
          source: '衛生福利部',
          title: '2025年健保檢驗給付項目調整',
          summary: '衛福部公布2025年度健保檢驗項目給付標準調整內容...',
          link: 'https://www.mohw.gov.tw/lab-payment-2025'
        },
        {
          id: 3,
          date: '2024-12-15',
          source: '國際檢驗醫學期刊',
          title: '液體生檢技術在癌症診斷的新進展',
          summary: '液體生檢技術在早期癌症診斷中的最新研究成果...',
          link: 'https://www.ijlm.org/liquid-biopsy-advances'
        }
      ]
    }
  },
  methods: {
    downloadFile(training) {
      alert('檔案下載功能將在後端開發時啟用')
    },
    viewFile(training) {
      alert('檔案預覽功能將在後端開發時啟用')
    }
  }
}
</script>

<style scoped>
.knowledge-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.knowledge-page h1 {
  color: #2c5aa0;
  margin-bottom: 30px;
  font-size: 28px;
}

.category-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  border-bottom: 2px solid #f0f0f0;
}

.tab-btn {
  padding: 12px 24px;
  border: none;
  background: transparent;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.tab-btn:hover {
  color: #2c5aa0;
}

.tab-btn.active {
  color: #2c5aa0;
  border-bottom-color: #2c5aa0;
  font-weight: 600;
}

.knowledge-content h2 {
  color: #2c5aa0;
  margin-bottom: 24px;
  font-size: 24px;
}

/* 教育訓練區塊 */
.upload-section {
  margin-bottom: 40px;
}

.upload-card {
  background: #fff;
  border: 2px dashed #2c5aa0;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s;
}

.upload-card:hover {
  border-color: #1e3f73;
  background: #f8fbff;
}

.upload-card h3 {
  color: #2c5aa0;
  margin-bottom: 12px;
  font-size: 20px;
}

.upload-card p {
  color: #666;
  margin-bottom: 20px;
}

.admin-note {
  color: #999;
  font-size: 14px;
  font-style: italic;
  margin-bottom: 20px;
}

.upload-btn {
  background: #ccc;
  color: #666;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: not-allowed;
  transition: background 0.3s;
}

.upload-btn:not(:disabled) {
  background: #2c5aa0;
  color: white;
  cursor: pointer;
}

.upload-btn:not(:disabled):hover {
  background: #1e3f73;
}

.training-list {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.training-item {
  padding: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.training-item:last-child {
  border-bottom: none;
}

.training-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.date {
  color: #999;
  font-size: 14px;
}

.month-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.training-item h4 {
  color: #333;
  margin-bottom: 8px;
  font-size: 18px;
}

.training-item p {
  color: #666;
  margin-bottom: 12px;
  line-height: 1.6;
}

.training-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.file-info {
  color: #999;
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 8px;
}

.download-btn, .view-btn {
  background: transparent;
  color: #2c5aa0;
  border: 1px solid #2c5aa0;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.download-btn:hover, .view-btn:hover {
  background: #2c5aa0;
  color: white;
}

/* 專業資源區塊 */
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.resource-card {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s;
  border-top: 4px solid #2c5aa0;
}

.resource-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.resource-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.resource-card h4 {
  color: #2c5aa0;
  margin-bottom: 12px;
  font-size: 18px;
}

.resource-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.resource-link {
  display: inline-block;
  color: #2c5aa0;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border: 1px solid #2c5aa0;
  border-radius: 20px;
  transition: all 0.3s;
}

.resource-link:hover {
  background: #2c5aa0;
  color: white;
  transform: translateY(-1px);
}

/* 醫學新知區塊 */
.news-list {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.news-item {
  padding: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.news-item:last-child {
  border-bottom: none;
}

.news-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 12px;
}

.source {
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.news-item h4 {
  color: #333;
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 1.4;
}

.news-item p {
  color: #666;
  margin-bottom: 16px;
  line-height: 1.6;
}

.news-link {
  color: #2c5aa0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.news-link:hover {
  color: #1e3f73;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .category-tabs {
    flex-wrap: wrap;
    gap: 5px;
  }
  
  .tab-btn {
    padding: 10px 16px;
    font-size: 14px;
  }
  
  .resource-grid {
    grid-template-columns: 1fr;
  }
  
  .training-footer {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .actions {
    justify-content: center;
  }
}
</style>