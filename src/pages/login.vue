<template>
  <el-card class="box-card">
    <h2 style="text-align: center">登录面板</h2>
    <el-form class="box-form" ref="formRef" :model="form" label-width="auto">
      <el-form-item label="用户名">
        <el-input v-model="form.name" size="small" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" size="small" />
      </el-form-item>
      <el-form-item class="box-btn">
        <el-button
          type="primary"
          v-loading.fullscreen.lock="loading"
          @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { Message } from 'element3';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import http from '../api/index.js';
import { useStorage } from '../utils/useStorage';
const router = useRouter();
const loading = ref(false);
const form = reactive({
  name: '',
  password: ''
});
/**
 * 登录
 */
const submitForm = () => {
  loading.value = true;
  const data = {
    name: form.name,
    password: form.password
  };
  http.post('/api/login', data).then((res) => {
    const value = useStorage('token', res.data);
    if (value) {
      if (res.code == 20000) {
        console.log('数据返回成功');
        loading.value = false;
        router.replace('/');
      }
      if (res.code == 60204) {
        loading.value = false;
        Message({
          type: 'error',
          message: res.msg
        });
      }
    }
  });
};
/**
 * 重置
 */
const resetForm = (rule) => {};
</script>
<style lang="scss" scoped>
@import '~@/style/login.scss';
</style>
