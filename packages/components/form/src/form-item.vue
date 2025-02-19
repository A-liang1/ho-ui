<script lang="ts" setup>
import { useNamespace } from '@ho-liang/hooks'
import { provide, ref, reactive, computed, inject, onMounted } from 'vue'
import {
  FormItemValidateState,
  formItemContextKey,
  formItemProps,
  FormItemContext,
  FormItemRule,
  Arrayable,
} from './form-item'
import { FormContextKey } from './form'
import AsyncValidator, { Values } from 'async-validator'

const FormContext = inject(FormContextKey)

const bem = useNamespace('form-item', 'ho')

const { label, prop, rules, showMessage } = defineProps(formItemProps)

defineOptions({
  name: 'ho-form-item',
})

const validateState = ref<FormItemValidateState>('')
const validateMessage = ref('')

const coverArray = (rules: Arrayable<FormItemRule> | undefined): FormItemRule[] => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : []
}

const _rules = computed(() => {
  const myRules = coverArray(rules)
  const formRules = FormContext?.rules
  if (formRules && prop) {
    const _temp = formRules[prop]
    if (_temp) myRules.push(...coverArray(_temp))
  }
  return myRules
})

const getRuleFitered = (trigger: string) => {
  const rules = _rules.value
  return rules.filter((rule) => {
    if (!rule.trigger || !trigger) return true
    if (Array.isArray(rule.trigger)) return rule.trigger.includes(trigger)
    else return rule.trigger === trigger
  })
}

const onValidationSuccessed = () => {
  validateState.value = 'success'
  validateMessage.value = ''
}
const onValidationFailed = (error: Values) => {
  validateState.value = 'error'
  const { errors } = error
  validateMessage.value = errors ? errors[0].message : '校验失败！'
}
const validate: FormItemContext['validate'] = async (trigger: string, callback?) => {
  const rules = getRuleFitered(trigger) // 合并rules
  const modelName = prop! // form-item 对应的prop数据名
  const model = FormContext?.model! //form对应的总体数据
  const validtor = new AsyncValidator({
    [modelName]: rules, // 这里[modelName]是一个对象，key是prop名，value是对应的校验规则]
  })

  return validtor
    .validate({
      modelName: model[modelName],
    })
    .then(() => onValidationSuccessed())
    .catch((err: Values) => {
      onValidationFailed(err)
      return Promise.reject(err)
    })
}

const context: FormItemContext = reactive({
  label,
  prop,
  rules,
  showMessage,
  validate,
})

provide(formItemContextKey, context)
onMounted(() => {
  FormContext?.addField(context)
})
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('success', validateState === 'success'),
      bem.is('error', validateState === 'error'),
    ]"
  >
    <label :class="bem.e('label')">
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">
        <slot name="error">
          {{ validateMessage }}
        </slot>
      </div>
    </div>
  </div>
</template>
