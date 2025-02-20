## 文件上传
  - 文件大小限制 (beforeUpload:()=>{file.size / 1024 / 1024 > 2MB}) 字节为单位 
  - 文件类型限制 (:accept，有一个问题png，改成jpg|jpeg)
  - 文件预览  (v-model:file-list，name和url，在onStart中URL.createObjectURL(file))
  - 文件上传进度 (单文件：file.percentage，多文件：?)
  - 单文件上传 (设置input的type为file，@change,e.target.files获取文件,遍历（多文件）添加uid，onStart钩子执行，然后执行upload；一开始beforeUpload钩子，可以判断一些逻辑来决定是否上传这个文件，如果不上传返回false，根据返回的布尔值，执行onRemove移除该文件；然后是执行封装的ajax / axios 进行上传；这里边监听progress上传进度，执行onProgress钩子，设置传入的header请求头，然后formData设置传入的data和文件，成功失败返回，send把formData传给后端)
  - 多文件上传 

  - 目录上传
  - 拖拽上传
  - 文件删除
  - 文件重命名

  - 大文件上传 Blob.slice md5算法进行hash分片，给每一片一个唯一的hash标识，这一步是耗时的用webWork；分片
  - 秒传
  - 断点续传
  - 文件上传取消
  - 文件上传暂停
  - 文件上传恢复
 

### 小tips
  - async-pool 异步并发(Promise.all / Promise.race)
  - Blob 对象 { type(MIME), size } 
  - File 对象
  