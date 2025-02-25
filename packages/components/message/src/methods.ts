import { isVNode, render, h, shallowReactive } from 'vue'
import type {
  CreateMessageProps,
  MessageInstance,
  MessageFn,
  Message,
  MessageType,
  MessageHandler,
  MessageParams,
  MessageProps,
} from './message'
import { messageTypes } from './message'
import { isString } from '@ho-liang/utils'
import { useId, useZIndex } from '@ho-liang/hooks'
import { findIndex, get, set, each } from 'lodash-es'
import MessageConstructor from './message.vue'

const instances: MessageInstance[] = shallowReactive([])
const { nextZIndex } = useZIndex()

const messageDefaults = {
  type: 'info',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
}
// 如果传入的是字符串，就将字符串赋值给message属性，否则直接是传入对象，最后将result与默认值合并返回
const normalizedOptions = (options: MessageParams): CreateMessageProps => {
  const result =
    !options || isVNode(options) || isString(options)
      ? {
          message: options,
        }
      : options
  return { ...messageDefaults, ...result } as CreateMessageProps
}

const createMessage = (props: CreateMessageProps): MessageInstance => {
  const id = useId().value
  const container = document.createElement('div')

  const destory = () => {
    const idx = findIndex(instances, { id })
    if (idx === -1) return

    instances.splice(idx, 1)
    render(null, container)
  }

  const _props: MessageProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestory: destory,
  }
  // 连接组件和props，创建一个vnode
  const vnode = h(MessageConstructor, _props)

  render(vnode, container)

  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!
  const handler: MessageHandler = {
    close: () => vm.exposed!.close(),
  }
  const instance: MessageInstance = {
    props: _props,
    id,
    vm,
    vnode,
    handler,
  }
  instances.push(instance)

  return instance
}

export function getLastBottomOffset(this: MessageProps) {
  const idx = findIndex(instances, { id: this.id })
  if (idx <= 0) return 0

  return get(instances, [idx - 1, 'vm', 'exposed', 'bottomOffset', 'value'])
}

export const message: MessageFn & Partial<Message> = (options = {}) => {
  const normalized = normalizedOptions(options) // 将传入的参数转换为标准的参数
  const instance = createMessage(normalized) // 创建一个message实例

  return instance.handler
}

export function closeAll(type?: MessageType) {
  each(instances, (instance) => {
    if (type) {
      instance.props.type === type && instance.handler.close()
      return
    }
    instance.handler.close()
  })
}

each(messageTypes, (type) => {
  set(message, type, (options: MessageParams) => {
    const normalized = normalizedOptions(options)
    return message({ ...normalized, type })
  })
})

message.closeAll = closeAll

export default message as Message
