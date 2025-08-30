<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <div class="logo-icon">🏥</div>
        <h1>聯合醫事檢驗所</h1>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  font-size: 32px;
}

.logo h1 {
  font-size: 24px;
  color: #2c5aa0;
  margin: 0;
}

</style>