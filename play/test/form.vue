<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from '@ho-liang/components/form'

const state = reactive({
  username: '',
  password: '',
})

const formRef = ref<FormInstance>()

const validateForm = () => {
  const form = formRef.value
  form?.validate((valid, errors) => console.log(valid, errors))
}
</script>
<template>
  <ho-form
    ref="formRef"
    :model="state"
    :rules="{
      username: {
        min: 6,
        max: 10,
        message: '用户名在 6 到 10 个字符',
        trigger: ['change', 'blur'],
      },
    }"
  >
    <ho-form-item
      label="用户名："
      prop="username"
      :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
    >
      <ho-input placeholder="请输入用户名" v-model="state.username"></ho-input>
      <template #label>用户名：</template>
    </ho-form-item>

    <ho-form-item
      label="密码："
      prop="password"
      :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
    >
      <ho-input placeholder="请输入密码" type="password" v-model="state.password"></ho-input>
    </ho-form-item>
  </ho-form>

  <ho-button size="medium" type="primary" :round="true" @click="validateForm">按钮</ho-button>
</template>
