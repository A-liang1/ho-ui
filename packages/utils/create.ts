// block 代码块  element 元素 modifier 装饰 state状态
//ho-button
//ho-button__element
//ho-button__element--modifier
//is-checked is-enabled

// :class="[bem.b('button')]"

function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) prefixName += `-${blockSuffix}`;
  if (element) prefixName += `__${element}`;
  if (modifier) prefixName += `--${modifier}`;
  return prefixName;
}
export function createBEM(prefixName: string) {
  const b = (block: string = "") => _bem(prefixName, block, "", "");
  const e = (element: string) =>
    element ? _bem(prefixName, "", element, "") : "";
  const m = (modifier: string) =>
    modifier ? _bem(prefixName, "", "", modifier) : "";
  const be = (block: string, element: string) =>
    block && element ? _bem(prefixName, block, element, "") : "";
  const bm = (block: string, modifier: string) =>
    block && modifier ? _bem(prefixName, block, "", modifier) : "";
  const em = (element: string, modifier: string) =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (block: string, element: string, modifier: string) =>
    block && element && modifier
      ? _bem(prefixName, block, element, modifier)
      : "";
  const is = (name: string, state) => {
    state ? `is-${name}` : "";
  };
  return { b, e, m, be, bm, em, bem, is };
}
export function createNamespace(name: string) {
  const prefixName = `ho-${name}`;
  return createBEM(prefixName);
}

const bem = createNamespace("icon");
/*
console.log(bem.b("box"));
console.log(bem.e("element"));
console.log(bem.m("modifier"));
console.log(bem.be("box", "element"));
console.log(bem.bm("box", "modifier"));
console.log(bem.em("element", "modifier"));
console.log(bem.bem("box", "element", "modifier"));
console.log(bem.is("checked", true));
*/
