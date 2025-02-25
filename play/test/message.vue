<script lang="ts" setup>
import { h } from 'vue'
import { HoMessage, HoButton } from '@ho-liang/components'

const open = () => {
  HoMessage({
    message: 'This is a message.',
    type: 'success',
    duration: 1000,
    center: true,
    offset: 10,
  })
}

const openVn = () => {
  HoMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

<template>
  <ho-button @click="open">Show message</ho-button>
  <ho-button :plain="true" @click="openVn">VNode</ho-button>
</template>
