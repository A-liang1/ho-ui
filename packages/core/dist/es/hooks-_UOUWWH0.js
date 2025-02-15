import { computed as r } from "vue";
const m = "is-", e = (n, v, a, $, p) => {
  let u = `${n}-${v}`;
  return a && (u += `-${a}`), $ && (u += `__${$}`), p && (u += `--${p}`), u;
}, j = (n, v) => {
  const a = r(
    () => v
  );
  return {
    namespace: a,
    b: (s = "") => e(a.value, n, s, "", ""),
    e: (s) => s ? e(a.value, n, "", s, "") : "",
    m: (s) => s ? e(a.value, n, "", "", s) : "",
    be: (s, t) => s && t ? e(a.value, n, s, t, "") : "",
    bm: (s, t) => s && t ? e(a.value, n, s, "", t) : "",
    em: (s, t) => s && t ? e(a.value, n, "", s, t) : "",
    bem: (s, t, c) => s && t && c ? e(a.value, n, s, t, c) : "",
    is: (s, ...t) => {
      const c = t.length >= 1 ? t[0] : !0;
      return s && c ? `${m}${s}` : "";
    }
  };
};
export {
  j as u
};
