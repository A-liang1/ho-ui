import { computed } from "vue";
//默认命名前缀
export const defaultNamespace = "ho";
const statePrefix = "is-";
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
export const useNamespace = (
  block: string,
  namespaceOverride?: string | undefined
) => {
  //命名前缀也是命名空间
  const namespace = computed(() =>
    namespaceOverride ? namespaceOverride : defaultNamespace
  );
  // 创建块 例如：ho-icon
  const b = (blockSuffix = "") =>
    _bem(namespace.value, block, blockSuffix, "", "");
  // 创建元素 例如：ho-icon__element
  const e = (element?: string) =>
    element ? _bem(namespace.value, block, "", element, "") : "";
  // 创建修饰符 例如：ho-icon--modifier
  const m = (modifier?: string) =>
    modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  // 创建块元素 例如：ho-icon__element
  const be = (blockSuffix: string, element?: string) =>
    blockSuffix && element
      ? _bem(namespace.value, block, blockSuffix, element, "")
      : "";
  // 创建后缀块修饰符 例如：ho-icon--modifier
  const bm = (blockSuffix: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(namespace.value, block, blockSuffix, "", modifier)
      : "";
  // 创建元素修饰符 例如：ho-icon--modifier
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(namespace.value, block, "", element, modifier)
      : "";
  // 创建块元素修饰符 例如：ho-icon__element--modifier
  const bem = (blockSuffix: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace.value, block, blockSuffix, element, modifier)
      : "";
  // 创建状态修饰符 例如：is-checked
  const is: {
    (name: string, state: boolean | undefined): string;
    (name: string): string;
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  return {
    namespace,
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
};
