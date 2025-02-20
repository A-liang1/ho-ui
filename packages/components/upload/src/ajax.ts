import { UploadProgressEvent } from './upload'
import { RequestOptions } from './upload-content'

export function httpRequest(options: RequestOptions) {
  const xhr = new XMLHttpRequest()
  const action = options.action

  xhr.open(options.method, action)
  xhr.upload.addEventListener('progress', (e) => {
    const processEvents = e as UploadProgressEvent
    const percentage = e.total > 0 ? (e.loaded / e.total) * 100 : 0

    options.onProgress({ ...processEvents, percentage })
  })

  const headers = options.headers
  if (headers) {
    for (const [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value)
    }
  }

  const formData = new FormData()
  if (options.data) {
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(key, value)
    }
  }

  formData.append(options.name, options.file)

  // for (const [key, value] of formData.entries()) {
  //   console.log(key, value)
  // }

  xhr.onload = function () {
    if (xhr.status < 300 && xhr.status >= 200) options.onSuccess(xhr.response)
    else options.onError(xhr.response)
  }

  xhr.addEventListener('error', function (err) {
    options.onError(err)
  })

  xhr.send(formData)

  return xhr
}
