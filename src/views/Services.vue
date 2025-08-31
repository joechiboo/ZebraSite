<template>
  <div class="services-page">
    <h1>檢驗服務總覽</h1>
    
    <div class="search-section">
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery"
          placeholder="請輸入檢驗項目名稱或代碼..."
          class="search-input"
        />
        <button class="search-btn" @click="performSearch">🔍 搜尋</button>
      </div>
      
      <div class="search-rules">
        <h3>搜尋規則說明</h3>
        <ul>
          <li>可使用檢驗項目中文名稱搜尋（如：血糖、膽固醇）</li>
          <li>可使用英文名稱搜尋（如：Glucose、Cholesterol）</li>
          <li>可使用檢驗代碼搜尋（如：GLU、CHOL）</li>
          <li>支援部分關鍵字搜尋（如：肝功能、腎功能）</li>
          <li>不區分大小寫，自動過濾空格</li>
        </ul>
      </div>
    </div>

    <div class="categories-section" v-if="!searchQuery">
      <h2>檢驗項目分類</h2>
      <div class="category-grid">
        <div 
          v-for="category in categories" 
          :key="category.id"
          class="category-card"
          @click="selectCategory(category.id)"
        >
          <div class="category-icon">{{ category.icon }}</div>
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
          <span class="item-count">{{ category.itemCount }} 項檢驗</span>
        </div>
      </div>
    </div>

    <div class="search-results" v-if="searchQuery">
      <h2>搜尋結果</h2>
      <div v-if="searchResults.length === 0" class="no-results">
        <p>未找到符合「{{ searchQuery }}」的檢驗項目</p>
        <p>請檢查拼寫或嘗試其他關鍵字</p>
      </div>
      <div v-else class="results-list">
        <div v-for="result in searchResults" :key="result.id" class="result-item">
          <div class="result-header">
            <span class="result-code">{{ result.code }}</span>
            <span class="result-category">{{ result.category }}</span>
          </div>
          <h4>{{ result.name }}</h4>
          <p>{{ result.description }}</p>
          <div class="result-footer">
            <span class="price">{{ result.price }}</span>
            <button class="detail-btn">查看詳情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      categories: [
        {
          id: 'urine',
          name: '尿液檢查',
          icon: '🧪',
          description: '尿液常規、蛋白質、糖份等檢測',
          itemCount: 25
        },
        {
          id: 'stool',
          name: '糞便檢查',
          icon: '🔬',
          description: '糞便常規、潛血、寄生蟲檢查',
          itemCount: 15
        },
        {
          id: 'hematology',
          name: '血液學檢查',
          icon: '🩸',
          description: '全血計數、血型、凝血功能檢查',
          itemCount: 35
        },
        {
          id: 'biochemistry',
          name: '生化學檢查',
          icon: '⚗️',
          description: '肝功能、腎功能、血糖、血脂檢查',
          itemCount: 80
        },
        {
          id: 'trace-elements',
          name: '微量元素測定與血中毒物濃度測定',
          icon: '🧬',
          description: '重金屬、維生素、藥物濃度檢測',
          itemCount: 45
        },
        {
          id: 'transfusion',
          name: '輸血前檢查',
          icon: '💉',
          description: '血型鑑定、交叉配血、抗體篩檢',
          itemCount: 20
        },
        {
          id: 'immunology',
          name: '免疫學檢查',
          icon: '🛡️',
          description: '免疫球蛋白、自體抗體、腫瘤標記',
          itemCount: 120
        },
        {
          id: 'bacteriology',
          name: '細菌學與黴菌檢查',
          icon: '🦠',
          description: '細菌培養、藥敏試驗、黴菌檢查',
          itemCount: 30
        },
        {
          id: 'virology',
          name: '病毒學檢查',
          icon: '🔍',
          description: '病毒抗原抗體、核酸檢測',
          itemCount: 40
        },
        {
          id: 'cytology',
          name: '細胞學檢查',
          icon: '🔬',
          description: '子宮頸抹片、痰液細胞學檢查',
          itemCount: 12
        },
        {
          id: 'puncture',
          name: '穿剌液採取液檢查',
          icon: '💧',
          description: '腦脊髓液、胸腹水、關節液檢查',
          itemCount: 18
        },
        {
          id: 'nuclear',
          name: '核子醫學檢查',
          icon: '☢️',
          description: '甲狀腺功能、骨質密度檢查',
          itemCount: 25
        },
        {
          id: 'allergy',
          name: '過敏免疫檢查',
          icon: '🤧',
          description: '過敏原檢測、免疫功能評估',
          itemCount: 60
        },
        {
          id: 'non-covered',
          name: '健保無給付',
          icon: '💰',
          description: '自費檢驗項目',
          itemCount: 95
        },
        {
          id: 'others',
          name: '其他',
          icon: '📋',
          description: '特殊檢驗、委外檢驗項目',
          itemCount: 50
        }
      ]
    }
  },
  methods: {
    performSearch() {
      // 模擬搜尋結果
      if (this.searchQuery.trim()) {
        this.searchResults = [
          {
            id: 1,
            code: 'GLU',
            name: '血糖',
            category: '生化學檢查',
            description: '空腹血糖檢測，用於糖尿病診斷及血糖控制監測',
            price: 'NT$ 150'
          },
          {
            id: 2,
            code: 'CHOL',
            name: '膽固醇',
            category: '生化學檢查',
            description: '總膽固醇檢測，用於心血管疾病風險評估',
            price: 'NT$ 200'
          }
        ]
      } else {
        this.searchResults = []
      }
    },
    selectCategory(categoryId) {
      console.log('Selected category:', categoryId)
      // 後續可以路由到分類頁面
    }
  }
}
</script>

<style scoped>
.services-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.services-page h1 {
  color: #2c5aa0;
  margin-bottom: 30px;
  font-size: 28px;
}

.search-section {
  background: white;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.search-input:focus {
  outline: none;
  border-color: #2c5aa0;
}

.search-btn {
  background: #2c5aa0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #1e3f73;
}

.search-rules {
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;
}

.search-rules h3 {
  color: #2c5aa0;
  margin-bottom: 12px;
  font-size: 18px;
}

.search-rules ul {
  color: #666;
  line-height: 1.6;
}

.search-rules li {
  margin-bottom: 6px;
}

.categories-section h2 {
  color: #2c5aa0;
  margin-bottom: 24px;
  font-size: 24px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.category-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 4px solid #2c5aa0;
  cursor: pointer;
  transition: all 0.3s;
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.category-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.category-card h3 {
  color: #2c5aa0;
  margin-bottom: 8px;
  font-size: 18px;
}

.category-card p {
  color: #666;
  margin-bottom: 12px;
  line-height: 1.5;
}

.item-count {
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.search-results h2 {
  color: #2c5aa0;
  margin-bottom: 20px;
  font-size: 24px;
}

.no-results {
  text-align: center;
  padding: 40px;
  color: #999;
}

.results-list {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.result-item {
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.result-item:last-child {
  border-bottom: none;
}

.result-header {
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
}

.result-code {
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}

.result-category {
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.result-item h4 {
  color: #333;
  margin-bottom: 8px;
  font-size: 18px;
}

.result-item p {
  color: #666;
  margin-bottom: 12px;
  line-height: 1.5;
}

.result-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #2c5aa0;
  font-weight: 600;
  font-size: 16px;
}

.detail-btn {
  background: transparent;
  color: #2c5aa0;
  border: 1px solid #2c5aa0;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.detail-btn:hover {
  background: #2c5aa0;
  color: white;
}

@media (max-width: 768px) {
  .search-container {
    flex-direction: column;
    gap: 10px;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
  }
  
  .result-footer {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
}</style>