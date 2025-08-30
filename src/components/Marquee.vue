<template>
  <div class="marquee-container" v-if="messages.length > 0">
    <div class="marquee">
      <div class="marquee-content">
        <span v-for="(message, index) in messages" :key="index" class="marquee-item">
          {{ message }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  data() {
    return {
      messages: [
        '🔔 重要公告：春節期間營業時間調整，詳情請洽各分所',
        '📢 新增COVID-19快篩服務，歡迎來電預約',
        '⚡ 線上報告查詢系統已上線，請持身分證件查詢'
      ]
    }
  }
}
</script>

<style scoped>
.marquee-container {
  background: #ff6b35;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  height: 40px;
  display: flex;
  align-items: center;
}

.marquee {
  width: 100%;
}

.marquee-content {
  display: inline-block;
  animation: scroll 30s linear infinite;
}

.marquee-item {
  margin-right: 100px;
  font-weight: 500;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}
</style>