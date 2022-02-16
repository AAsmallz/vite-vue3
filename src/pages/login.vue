<template>
  <el-card class="box-card" style="width: 500px; margin: 50px auto">
    <h2 style="text-align: center">登录面板</h2>
    <el-form class="box-form" ref="formRef" :model="form" label-width="auto">
      <el-form-item label="用户名">
        <el-input v-model="form.name" size="small" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" size="small" />
      </el-form-item>
      <el-form-item class="box-btn">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
const props = defineProps({});
const form = reactive({
  name: '',
  password: ''
});
/**
 * 登录
 */
const submitForm = (rule) => {};
/**
 * 重置
 */
const resetForm = (rule) => {};
</script>
<style lang="scss" scoped>
@import '~@/style/login.scss';
</style>
