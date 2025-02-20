<script setup lang="ts">
import UploadContent from './upload-content.vue'
import { computed, ref, watch } from 'vue'
import { uploadProps, UploadFiles, UploadFile, UploadRawFile } from './upload'
import { UploadContentProps } from './upload-content'

defineOptions({
  name: 'ho-upload',
})

const props = defineProps(uploadProps)
const emit = defineEmits(['onUpdate:file-list'])

const uploadFiles = ref<UploadFiles>(props.fileList)

watch(
  () => uploadFiles,
  (newVal) => emit('onUpdate:file-list', newVal),
)

const findFile = (rawFile: UploadRawFile) => {
  return uploadFiles.value.find((file) => file.uid === rawFile.uid)
}

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  fileList: uploadFiles.value,
  onStart: (rawFile) => {
    const uploadFile: UploadFile = {
      uid: rawFile.uid,
      name: rawFile.name,
      percentage: 0,
      raw: rawFile,
      status: 'start',
    }
    uploadFile.url = URL.createObjectURL(rawFile) // 预览，浏览器会自动释放
    uploadFiles.value = [...uploadFiles.value, uploadFile]
    props.onChange?.(uploadFile)
  },
  onProgress: (e, rawFile) => {
    const uploadFile = findFile(rawFile)
    if (!uploadFile) return
    uploadFile.status = 'uploading'
    uploadFile.percentage = e.percentage
    props.onProgress?.(e, uploadFile, uploadFiles.value)
  },
  onRemove: async (rawFile) => {
    const uploadFile = findFile(rawFile)
    if (!uploadFile) return
    const r = await props.beforeRemove?.(uploadFile, uploadFiles.value)
    if (r) {
      const fileList = uploadFiles.value
      fileList.splice(fileList.indexOf(uploadFile), 1)
      props.onRemove?.(uploadFile, fileList)
    }
  },
  onSuccess: (res, rawFile) => {
    const uploadFile = findFile(rawFile)
    if (!uploadFile) return
    uploadFile.status = 'success'
    props.onSuccess?.(res, uploadFile, uploadFiles.value)
  },
  onError: (err, rawFile) => {
    const uploadFile = findFile(rawFile)
    if (!uploadFile) return
    uploadFile.status = 'error'
    props.onError?.(err, uploadFile, uploadFiles.value)
  },
}))
</script>

<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
</template>
