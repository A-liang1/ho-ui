import type { Ref, VNode, ComponentInternalInstance } from 'vue'

export const messageTypes = ['info', 'success', 'warning', 'danger', 'error'] as const

export type MessageType = (typeof messageTypes)[number]

export interface MessageHandler {
  close(): void
}

export type MessageFn = {
  (props: MessageParams): MessageHandler
  closeAll(type?: MessageType): void
}

export type MessageTypeFn = (props: MessageParams) => MessageHandler

export interface Message extends MessageFn {
  success: MessageTypeFn
  warning: MessageTypeFn
  danger: MessageTypeFn
  error: MessageTypeFn
  info: MessageTypeFn
}

export interface MessageProps {
  id: string // 唯一标识
  message?: string | VNode | (() => VNode) // 消息内容
  duration?: number // 显示时间
  showClose?: boolean // 是否显示关闭按钮
  center?: boolean // 是否居中显示
  type?: MessageType // 消息类型
  offset?: number // 间隔
  zIndex?: number // 层级
  transitionName?: string // 动画名称
  onDestory?: () => void
}

export type MessageOptions = Partial<Omit<MessageProps, 'id'>>
export type MessageParams = string | VNode | MessageOptions

export interface MessageInstance {
  id: string
  vnode: VNode
  props: MessageProps
  vm: ComponentInternalInstance
  handler: MessageHandler
}

export interface MessageCompInstance {
  close(): void
  bottomOffset: Ref<number>
}

export type CreateMessageProps = Omit<MessageProps, 'onDestroy' | 'id' | 'zIndex'>
