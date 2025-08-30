<template>
  <div id="app">
    <div class="main-layout">
      <Sidebar />
      <main class="content">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft JhengHei', sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-layout {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }
}</style>