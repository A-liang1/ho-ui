const o = (n) => n === void 0, i = (n) => typeof n == "number", r = (n) => typeof n == "string", e = (n) => r(n) ? !Number.isNaN(Number(n)) : !1;
function f(n) {
  return n.install = (t) => {
    const { name: s } = n;
    t.component(s, n);
  }, n;
}
function c(n, t = "px") {
  if (!n) return "";
  if (i(n) || e(n))
    return `${n}${t}`;
  if (r(n))
    return n;
}
export {
  c as a,
  o as i,
  f as w
};
