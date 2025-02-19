<script setup lang="ts">
import { useNamespace } from '@ho-liang/hooks'
import { FormContext, FormContextKey, formProps } from './form'
import { provide } from 'vue'
import { FormItemContext } from './form-item'
import { Values } from 'async-validator'

const bem = useNamespace('form', 'ho')
defineOptions({
  name: 'ho-form',
})

const { model, rules, showMessage } = defineProps(formProps)

const validate = async (callback?: (valid: boolean, fields?: Values) => void) => {
  let errors: Values = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (error) {
      errors = {
        ...errors,
        ...(error as Values)?.fields,
      }
    }
  }
  if (Object.keys(errors).length === 0) return callback?.(true)
  else {
    if (callback) callback?.(false, errors)
    else return Promise.reject(errors)
  }
}

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (context) => {
  fields.push(context)
}

const context = {
  model,
  rules,
  showMessage,
  addField,
}

provide(FormContextKey, context)
defineExpose({
  validate,
})
</script>

<template>
  <form>
    <slot></slot>
  </form>
</template>
