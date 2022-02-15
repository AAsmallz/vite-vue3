<template>
  <el-container>
    <el-header>
      <nav-header></nav-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <nav-aside></nav-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import navHeader from '@/components/header.vue';
import navAside from '@/components/aside.vue';
</script>
<style lang="scss" scoped>
@import '~@/style/common.scss';
</style>
