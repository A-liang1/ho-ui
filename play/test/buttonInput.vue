<template>
  <ho-button
    @click="handleClick"
    @mousedown="handleMousedown"
    size="small"
    type="danger"
    :round="true"
    :disabled="false"
  >
    按钮
    <template #icon>
      <ho-icon>
        <Switcher />
      </ho-icon>
    </template>
  </ho-button>

  <hr />

  <ho-input
    v-model="inputValue"
    @change="handleChange"
    @blur="handleBlur"
    @focus="handleFocus"
    :placeholder="'请输入密码'"
    :disabled="false"
    :readonly="false"
    :show-password="true"
    :clearable="true"
  >
    <template #prepend>前置内容</template>
    <!-- <template #prefixIcon>
      <ho-icon>
        <Switcher />
      </ho-icon>
    </template> -->
    <!-- <template #suffixIcon>
      <ho-icon>
        <Switcher />
      </ho-icon>
    </template> -->
    <template #append>后置内容</template>
  </ho-input>
</template>
<script setup lang="ts">
import HoIcon from '@ho-liang/components/icon'
import Switcher from '@ho-liang/components/internal-icon/Switcher.vue'
import HoInput from '@ho-liang/components/input'
import { ref } from 'vue'
const handleClick = (e: MouseEvent) => {
  console.log('click', e)
}

const handleMousedown = (e: MouseEvent) => {
  console.log('mousedown', e)
}

const inputValue = ref('hello')

const handleChange = (value: string) => {
  console.log('change', value)
}

const handleBlur = (e: FocusEvent) => {
  // console.log('blur', e)
}

const handleFocus = (e: FocusEvent) => {
  // console.log('focus', e)
}
</script>
<style scoped></style>
