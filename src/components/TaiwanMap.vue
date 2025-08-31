<template>
  <div class="taiwan-map-container">
    <div class="map-wrapper">
      <svg viewBox="0 0 400 600" class="taiwan-map">
        <!-- 台灣島輪廓 (簡化版) -->
        <path
          d="M200 50 L220 60 L240 80 L250 100 L260 130 L270 160 L275 200 L280 240 L275 280 L270 320 L260 360 L250 390 L240 420 L220 440 L200 450 L180 460 L160 450 L140 440 L120 420 L110 390 L100 360 L95 320 L90 280 L95 240 L100 200 L110 160 L120 130 L130 100 L140 80 L160 60 Z"
          fill="#e8f4f8"
          stroke="#2c5aa0"
          stroke-width="2"
        />
        
        <!-- 分部位置標記 -->
        <g v-for="branch in branches" :key="branch.id">
          <circle
            :cx="branch.x"
            :cy="branch.y"
            r="8"
            :fill="hoveredBranch === branch.id ? '#dc3545' : '#2c5aa0'"
            stroke="white"
            stroke-width="2"
            class="branch-marker"
            @mouseenter="showBranchInfo(branch)"
            @mouseleave="hideBranchInfo"
            @click="selectBranch(branch)"
          />
          <text
            :x="branch.x"
            :y="branch.y - 15"
            text-anchor="middle"
            class="branch-label"
            :fill="hoveredBranch === branch.id ? '#dc3545' : '#2c5aa0'"
          >
            {{ branch.city }}
          </text>
        </g>
      </svg>
      
      <!-- 懸停信息卡片 -->
      <div 
        v-if="hoveredBranch" 
        class="info-popup"
        :style="{ left: popupPosition.x + 'px', top: popupPosition.y + 'px' }"
      >
        <div class="popup-content">
          <h4>{{ selectedBranchData.name }}</h4>
          <p><strong>營業時間：</strong>{{ selectedBranchData.hours }}</p>
          <p><strong>電話：</strong>{{ selectedBranchData.phone }}</p>
          <p><strong>地址：</strong>{{ selectedBranchData.address }}</p>
        </div>
      </div>
    </div>
    
    <!-- 分部詳細資訊列表 -->
    <div class="branches-grid">
      <div 
        v-for="branch in branches" 
        :key="branch.id"
        class="branch-card"
        :class="{ active: selectedBranch === branch.id }"
        @click="selectBranch(branch)"
      >
        <div class="branch-header">
          <div class="city-icon">{{ branch.icon }}</div>
          <h3>{{ branch.name }}</h3>
        </div>
        <div class="branch-details">
          <div class="detail-item">
            <span class="icon">🕒</span>
            <span>{{ branch.hours }}</span>
          </div>
          <div class="detail-item">
            <span class="icon">📞</span>
            <span>{{ branch.phone }}</span>
          </div>
          <div class="detail-item">
            <span class="icon">📍</span>
            <span>{{ branch.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaiwanMap',
  data() {
    return {
      hoveredBranch: null,
      selectedBranch: null,
      popupPosition: { x: 0, y: 0 },
      branches: [
        {
          id: 'taipei',
          city: '台北',
          name: '大安聯合醫事檢驗所',
          hours: '週一至週六08:00-21:00',
          phone: '02-27049977',
          address: '10665 台北市大安區復興南路二段151巷33號',
          x: 200,
          y: 120,
          icon: '🏢'
        },
        {
          id: 'taoyuan',
          city: '桃園',
          name: '桃園聯合醫事檢驗所',
          hours: '周一至周六早上8點至晚上21點',
          phone: '03-3333580',
          address: '桃園市萬壽路三段178號',
          x: 185,
          y: 140,
          icon: '🏥'
        },
        {
          id: 'hsinchu',
          city: '新竹',
          name: '新竹聯合醫事檢驗所',
          hours: '周一至周六早上8點至晚上21點',
          phone: '03-5330188',
          address: '新竹市自由路95巷18弄26號',
          x: 175,
          y: 160,
          icon: '🔬'
        },
        {
          id: 'taichung',
          city: '台中',
          name: '台中聯合醫事檢驗所',
          hours: '周一至周六早上8點至晚上21點',
          phone: '04-23135120',
          address: '台中市北屯區文心路四段619號',
          x: 160,
          y: 220,
          icon: '🧪'
        },
        {
          id: 'chiayi',
          city: '嘉義',
          name: '嘉義靜平醫事檢驗所',
          hours: '周一到周六早上8點至晚上21點',
          phone: '05-2169955',
          address: '嘉義市公明路259號',
          x: 155,
          y: 280,
          icon: '⚕️'
        },
        {
          id: 'kaohsiung',
          city: '高雄',
          name: '高雄聯合醫事檢驗所',
          hours: '周一至周六早上8點至晚上21點',
          phone: '07-269-3130',
          address: '高雄市苓雅區成功一路212號',
          x: 170,
          y: 370,
          icon: '🏛️'
        }
      ]
    }
  },
  computed: {
    selectedBranchData() {
      return this.branches.find(b => b.id === this.hoveredBranch) || {}
    }
  },
  methods: {
    showBranchInfo(branch) {
      this.hoveredBranch = branch.id
      // 計算彈出視窗位置 (相對於地圖)
      this.popupPosition = {
        x: branch.x + 20,
        y: branch.y - 50
      }
    },
    hideBranchInfo() {
      this.hoveredBranch = null
    },
    selectBranch(branch) {
      this.selectedBranch = branch.id
      // 滾動到對應的分部卡片
      this.$nextTick(() => {
        const element = document.querySelector(`.branch-card:nth-child(${this.branches.findIndex(b => b.id === branch.id) + 1})`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
      })
    }
  }
}
</script>

<style scoped>
.taiwan-map-container {
  padding: 20px 0;
}

.map-wrapper {
  position: relative;
  max-width: 400px;
  margin: 0 auto 40px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.taiwan-map {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.branch-marker {
  cursor: pointer;
  transition: all 0.3s ease;
}

.branch-marker:hover {
  r: 10;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.branch-label {
  font-size: 12px;
  font-weight: 600;
  pointer-events: none;
  transition: fill 0.3s ease;
}

.info-popup {
  position: absolute;
  background: white;
  border: 2px solid #2c5aa0;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 10;
  min-width: 250px;
  transform: translateX(-50%);
  pointer-events: none;
}

.popup-content h4 {
  color: #2c5aa0;
  margin-bottom: 8px;
  font-size: 14px;
}

.popup-content p {
  margin: 4px 0;
  font-size: 12px;
  line-height: 1.4;
  color: #333;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.branch-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.branch-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  border-color: #2c5aa0;
}

.branch-card.active {
  border-color: #dc3545;
  transform: translateY(-4px);
  box-shadow: 0 6px 24px rgba(220, 53, 69, 0.2);
}

.branch-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f0f0f0;
}

.city-icon {
  font-size: 32px;
  background: linear-gradient(135deg, #2c5aa0, #4a7bc8);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(44, 90, 160, 0.3);
}

.branch-header h3 {
  color: #2c5aa0;
  font-size: 18px;
  line-height: 1.3;
}

.branch-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
}

.detail-item .icon {
  font-size: 16px;
  width: 20px;
  flex-shrink: 0;
}

.detail-item span:last-child {
  color: #555;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .branches-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .map-wrapper {
    max-width: 300px;
  }
  
  .info-popup {
    min-width: 200px;
    font-size: 11px;
  }
  
  .branch-header {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  
  .city-icon {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .taiwan-map-container {
    padding: 10px 0;
  }
  
  .branch-card {
    padding: 16px;
  }
  
  .detail-item {
    flex-direction: column;
    gap: 4px;
  }
  
  .detail-item .icon {
    align-self: flex-start;
  }
}
</style>