<script lang="ts" setup>
import { inputProps, inputEmits } from './input'
import { Slots, useSlots, useAttrs, watch, ref, onMounted, nextTick, computed, inject } from 'vue'
import { useNamespace } from '@ho-liang/hooks'
import ShowPwd from '@ho-liang/components/internal-icon/ShowPwd.vue'
import HidePwd from '@ho-liang/components/internal-icon/HidePwd.vue'
import ClearCan from '@ho-liang/components/internal-icon/ClearCan.vue'
import { FormItemContext, formItemContextKey } from '@ho-liang/components/form/src/form-item'

const formItemContext = inject<FormItemContext>(formItemContextKey)

defineOptions({
  name: 'ho-input',
  inheritAttrs: false,
})

const bem = useNamespace('input', 'ho')

const { type, modelValue, placeholder, disabled, readonly, label, showPassword, clearable } =
  defineProps(inputProps)
const emit = defineEmits(inputEmits)
const slots: Slots = useSlots()
const attrs = useAttrs()

const setNativeInputValue = () => {
  const inputEle = inputRef.value
  if (!inputEle) return
  inputEle.value = String(modelValue)
}

onMounted(() => {
  setNativeInputValue()
})

watch(
  () => modelValue,
  (newVal) => {
    formItemContext?.validate('change').catch(() => {})
    setNativeInputValue()
  },
)
const inputRef = ref<HTMLInputElement | null>(null)

const focus = async () => {
  await nextTick() // 等待dom更新，重新获取焦点
  inputRef.value?.focus()
}

const passwordVisible = ref(false)

const showPwdVisible = computed(() => {
  return modelValue && showPassword && !disabled && !readonly
})

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  focus()
}

const showClear = computed(() => {
  return modelValue && clearable && !disabled && !readonly
})

const clear = () => {
  emit('input', '')
  emit('update:modelValue', '')
  emit('clear')
  focus()
}

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('input', value)
  emit('update:modelValue', value)
}

const handleChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('change', value)
}

const handleBlur = (e: FocusEvent) => {
  formItemContext?.validate('blur').catch(() => {})
  emit('blur', e)
}

const handleFocus = (e: FocusEvent) => {
  emit('focus', e)
}
</script>

<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('group')]">
      <div v-if="slots.prepend" :class="[bem.be('group', 'prepend')]">
        <slot name="prepend" />
      </div>

      <div :class="[bem.e('wrapper')]">
        <span v-if="slots.prefixIcon" :class="[bem.be('prefix-icon')]">
          <slot name="prefixIcon" />
        </span>

        <input
          :class="[bem.e('inner')]"
          v-bind="attrs"
          ref="inputRef"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :value="modelValue"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :show-password="showPassword"
          :label="label"
        />

        <ho-icon v-if="showPwdVisible" @click="handlePasswordVisible">
          <ShowPwd v-if="passwordVisible" />
          <HidePwd v-else />
        </ho-icon>
        <ho-icon v-if="showClear" @click="clear">
          <ClearCan />
        </ho-icon>

        <span v-if="slots.suffixIcon" :class="[bem.be('suffix-icon')]">
          <slot name="suffixIcon" />
        </span>
      </div>

      <div v-if="slots.append" :class="[bem.be('group', 'append')]">
        <slot name="append" />
      </div>
    </div>
  </div>
</template>
