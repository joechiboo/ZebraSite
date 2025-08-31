<template>
  <div class="contact-page">
    <h1>聯絡我們</h1>
    
    <div class="contact-content">
      <div class="contact-info">
        <h2>聯絡資訊</h2>
        <div class="info-item">
          <h3>📍 地址</h3>
          <p>10665 台北市大安區復興南路二段151巷33號</p>
        </div>
        
        <div class="info-item">
          <h3>📞 聯絡電話</h3>
          <p>電話：02-27049977</p>
          <p>傳真：02-27091974</p>
        </div>
        
        <div class="info-item">
          <h3>📧 電子信箱</h3>
          <p>info@ucl.com.tw</p>
        </div>
        
        <div class="info-item">
          <h3>🕐 營業時間</h3>
          <p>週一至週六 08:00-21:00</p>
          <p>週日公休</p>
        </div>
      </div>

      <div class="contact-form">
        <h2>線上諮詢</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名 *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="請輸入您的姓名"
            />
          </div>
          
          <div class="form-group">
            <label for="email">電子信箱 *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="請輸入您的電子信箱"
            />
          </div>
          
          <div class="form-group">
            <label for="phone">聯絡電話</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="請輸入您的聯絡電話"
            />
          </div>
          
          <div class="form-group">
            <label for="subject">主旨 *</label>
            <select id="subject" v-model="form.subject" required>
              <option value="">請選擇諮詢類別</option>
              <option value="檢驗諮詢">檢驗項目諮詢</option>
              <option value="報告查詢">報告查詢相關</option>
              <option value="預約服務">預約服務</option>
              <option value="收費諮詢">收費標準諮詢</option>
              <option value="其他問題">其他問題</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">訊息內容 *</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="6"
              placeholder="請詳細描述您的問題或需求..."
            ></textarea>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? '發送中...' : '發送訊息' }}
            </button>
            <button type="button" class="reset-btn" @click="resetForm">
              清除重填
            </button>
          </div>
        </form>
        
        <div v-if="showSuccess" class="success-message">
          ✅ 訊息已成功發送！我們將盡快回覆您。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      isSubmitting: false,
      showSuccess: false,
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      // 模擬發送延遲
      setTimeout(() => {
        this.isSubmitting = false
        this.showSuccess = true
        this.resetForm()
        
        // 3秒後隱藏成功訊息
        setTimeout(() => {
          this.showSuccess = false
        }, 3000)
      }, 1000)
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.contact-page h1 {
  color: #2c5aa0;
  margin-bottom: 30px;
  font-size: 28px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-info {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: fit-content;
}

.contact-info h2 {
  color: #2c5aa0;
  margin-bottom: 24px;
  font-size: 22px;
}

.info-item {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.info-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.info-item h3 {
  color: #333;
  margin-bottom: 8px;
  font-size: 16px;
}

.info-item p {
  color: #666;
  margin: 4px 0;
  line-height: 1.5;
}

.contact-form {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.contact-form h2 {
  color: #2c5aa0;
  margin-bottom: 24px;
  font-size: 22px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2c5aa0;
  box-shadow: 0 0 0 2px rgba(44, 90, 160, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.submit-btn {
  background: #2c5aa0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  flex: 1;
}

.submit-btn:hover:not(:disabled) {
  background: #1e3f73;
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.reset-btn {
  background: transparent;
  color: #666;
  border: 1px solid #ddd;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.reset-btn:hover {
  border-color: #999;
  color: #333;
}

.success-message {
  background: #d4edda;
  color: #155724;
  padding: 12px 16px;
  border-radius: 6px;
  margin-top: 16px;
  border: 1px solid #c3e6cb;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .form-actions {
    flex-direction: column;
  }
}</style>