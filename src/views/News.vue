<template>
  <div class="news-page">
    <h1>聯合訊息</h1>
    
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

    <div class="news-content">
      <div v-if="activeCategory === 'member'" class="news-list">
        <h2>會員訊息</h2>
        <div class="news-item" v-for="item in memberNews" :key="item.id">
          <div class="news-title">{{ item.title }}</div>
          <div class="news-desc">{{ item.description }}</div>
        </div>
      </div>

      <div v-if="activeCategory === 'union'" class="news-list">
        <h2>聯合訊息</h2>
        <div class="news-item" v-for="item in unionNews" :key="item.id">
          <div class="news-header">
            <span class="code">{{ item.code }}</span>
            <span class="date">{{ item.date }}</span>
          </div>
          <div class="news-title">{{ item.title }}</div>
          <div class="news-desc">{{ item.description }}</div>
        </div>
      </div>

      <div v-if="activeCategory === 'external'" class="news-list">
        <h2>相關網站重要訊息</h2>
        <div class="news-item" v-for="item in externalNews" :key="item.id">
          <div class="news-title">{{ item.title }}</div>
          <div class="news-desc">{{ item.description }}</div>
          <div class="news-source">來源：{{ item.source }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      activeCategory: 'member',
      categories: [
        { id: 'member', name: '會員訊息' },
        { id: 'union', name: '聯合訊息' },
        { id: 'external', name: '相關網站重要訊息' }
      ],
      memberNews: [
        {
          id: 1,
          title: '採檢送檢注意事項',
          description: '檢體採集前準備事項、送檢時間規定、保存條件等重要須知'
        },
        {
          id: 2,
          title: '危險數據一覽表',
          description: '各項檢驗的危險值範圍，超出範圍時的緊急處理流程'
        },
        {
          id: 3,
          title: '一般民眾檢驗單及抽血檢驗須知',
          description: '民眾檢驗前準備、抽血注意事項、報告領取方式'
        },
        {
          id: 4,
          title: '醫療院所檢驗單及送檢須知',
          description: '醫療機構送檢流程、檢體包裝要求、報告傳送方式'
        },
        {
          id: 5,
          title: '檢體採集及處理--檢體可補加測項目及時間',
          description: '檢體保存期限內可追加的檢驗項目及時間限制'
        }
      ],
      unionNews: [
        {
          id: 1,
          code: '455',
          date: '2024-08-30',
          title: '檢驗項目變更公告',
          description: '檢驗項目Anti-BMZ基底膜帶抗體、Anti-ICS Ab細胞間質抗體，原為外送台北病理中心改為大安聯合自行操作'
        },
        {
          id: 2,
          code: '454',
          date: '2024-08-28',
          title: 'Cortisol參考區間變更',
          description: '檢驗項目Cortisol皮質素免疫分析變更參考區間'
        },
        {
          id: 3,
          code: '453',
          date: '2024-08-25',
          title: '休假公告及新增檢測',
          description: '114年10月11日休假不營業，新增CYP2C19 Gene Mutation Analysis基因檢測'
        },
        {
          id: 4,
          code: '452',
          date: '2024-08-20',
          title: '選舉休假及HDL-C變更',
          description: '114年08月23日公投選舉休假不營業，檢驗項目HDL-C高密度脂蛋白-膽固醇參考區間變更'
        },
        {
          id: 5,
          code: '451',
          date: '2024-08-15',
          title: '檢驗項目異動公告',
          description: '血清酮體定量分析恢復正常操作，本周氏蛋白試驗停止檢驗服務，維生素A、E檢測恢復操作'
        }
      ],
      externalNews: [
        {
          id: 1,
          title: '衛福部最新檢驗規範更新',
          description: '實驗室檢驗品質管制相關法規修訂',
          source: '衛生福利部'
        },
        {
          id: 2,
          title: '醫療機構評鑑相關資訊',
          description: '114年度醫療機構評鑑標準及時程公告',
          source: '醫院評鑑暨醫療品質策進會'
        },
        {
          id: 3,
          title: '實驗室品質管制指引',
          description: '臨床實驗室品質管制作業指引更新版本',
          source: '疾病管制署'
        },
        {
          id: 4,
          title: '檢驗項目健保給付異動',
          description: '114年健保給付檢驗項目調整公告',
          source: '中央健康保險署'
        },
        {
          id: 5,
          title: '緊急檢驗作業規範',
          description: '緊急檢驗項目作業流程及品質管制要求',
          source: '國民健康署'
        }
      ]
    }
  }
}
</script>

<style scoped>
.news-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.news-page h1 {
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

.news-content h2 {
  color: #2c5aa0;
  margin-bottom: 20px;
  font-size: 24px;
}

.news-list {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.news-item {
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.news-item:last-child {
  border-bottom: none;
}

.news-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.code {
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}

.date {
  color: #999;
  font-size: 14px;
}

.news-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.news-desc {
  color: #666;
  line-height: 1.6;
  margin-bottom: 8px;
}

.news-source {
  color: #999;
  font-size: 14px;
  font-style: italic;
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
}</style>