<template>
    <div class="container">
      <h1>代码仓库</h1>
      <div class="tabs">
        <button class="tab-button" :class="{ active: currentTab === 'recent' }" @click="currentTab = 'recent'">最近访问</button>
        <button class="tab-button" :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">全部仓库</button>
        <button class="tab-button" :class="{ active: currentTab === 'public' }" @click="currentTab = 'public'">开源仓库</button>
        <button class="tab-button" @click="createRepository">创建代码仓库</button>
      </div>
      <div class="repositories">
        <div v-if="currentTab === 'recent'">
          <h2>最近访问</h2>
          <p>暂无数据</p>
        </div>
        <div v-else-if="currentTab === 'all'">
          <h2>全部仓库</h2>
          <p>暂无数据</p>
        </div>
        <div v-else-if="currentTab === 'public'">
          <h2>开源仓库</h2>
          <p>暂无数据</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RepositoryPage',
    data() {
      return {
        currentTab: 'recent'
      };
    },
    methods: {
      createRepository() {
        alert('创建代码仓库');
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 600px;
    margin: auto;
  }
  
  .tabs {
    display: flex;
    margin-bottom: 20px;
  }
  
  .tab-button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .tab-button.active {
    background-color: #0056b3;
  }
  
  .repositories {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  </style>