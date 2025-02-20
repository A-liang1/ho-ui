<script setup lang="ts">
import { genId, uploadProps, UploadRawFile } from './upload'
import { uploadContentProps } from './upload-content'
import { ref, useId } from 'vue'
import { useNamespace } from '@ho-liang/hooks'
import { httpRequest } from './ajax'
import uploadDragger from './upload-dragger.vue'

const bem = useNamespace('upload', 'ho')
defineOptions({
  name: 'ho-upload',
  inheritAttrs: false,
})

const {
  accept,
  multiple,
  method,
  name,
  action,
  headers,
  data,
  beforeUpload,
  onStart,
  onRemove,
  onSuccess,
  onError,
  onProgress,
  fileList,
} = defineProps(uploadContentProps)

const upload = async (rawFile: UploadRawFile) => {
  // inputRef.value!.value = ''
  const result = await beforeUpload?.(rawFile)
  if (!result) return onRemove?.(rawFile)
  // 上传
  httpRequest({
    method,
    file: rawFile,
    name,
    action,
    headers,
    data,
    onError: (e) => onError?.(e, rawFile),
    onSuccess: (response) => onSuccess?.(response, rawFile),
    onProgress: (e) => onProgress?.(e, rawFile),
  })
}

const uploadFiles = async (files: FileList) => {
  const uploadPromises = []
  for (let i = 0; i < files?.length; ++i) {
    const rawFile = files[i] as UploadRawFile
    // rawFile.uid = id
    rawFile.uid = genId()
    console.log(rawFile)
    onStart?.(rawFile)
    uploadPromises.push(upload(rawFile))
  }
  await Promise.all(uploadPromises)
}

// const id = useId()
const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files!
  console.log(files)
  uploadFiles(files)
}

const inputRef = ref<HTMLInputElement>()
const handleClick = () => {
  inputRef.value!.value = ''
  inputRef.value!.click()
}
</script>

<template>
  <div @click="handleClick" :class="bem.b()">
    <template v-if="drag">
      <uploadDragger @file="uploadFiles">
        <slot></slot>
      </uploadDragger>
    </template>

    <template v-else>
      <slot></slot>
    </template>

    <input
      ref="inputRef"
      type="file"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>

  <div v-if="!drag">
    <div v-for="file in fileList" :key="file.uid">
      <img :src="file.url" width="100" height="100" />
      <span>{{ file.name }}</span>
      <!-- <ho-button>删除</ho-button> -->
    </div>
  </div>
</template>
