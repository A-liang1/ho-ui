<script setup lang="ts">
import type { UploadRawFile } from '@ho-liang/components/upload'
const beforeUpload = (file: UploadRawFile) => {
  return true
}
</script>
<template>
  <ho-upload drag :multiple="true" :before-upload="beforeUpload">
    <!-- action="http://localhost:4000/upload" > -->
    <ho-button>点我上传</ho-button>
  </ho-upload>
</template>
