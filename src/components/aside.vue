<template>
  <section>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :default-openeds="defaultOpeneds"
    >
      <el-submenu index="1">
        <template v-slot:title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template v-slot:title>
            <span>分组一</span>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <template v-slot:title>
          <i class="el-icon-menu"></i>
          <span><router-link to="/home"> Home</router-link></span>
        </template>
      </el-menu-item>
      <el-menu-item index="3">
        <template v-slot:title>
          <i class="el-icon-setting"></i>
          <span><router-link to="/about">About</router-link></span>
        </template>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
const props = defineProps({});
</script>
<style lang="scss" scoped></style>
