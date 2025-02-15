import { defineComponent as i, computed as c, openBlock as a, createElementBlock as m, mergeProps as p, unref as l, renderSlot as u } from "vue";
import { u as f } from "./hooks-_UOUWWH0.js";
import { i as d, a as h, w as S } from "./utils-DpO0IGfB.js";
const _ = {
  color: String,
  size: [Number, String]
  //类型断言
}, b = /* @__PURE__ */ i({
  name: "ho-icon",
  __name: "icon",
  props: _,
  setup(n) {
    const s = f("icon", "ho"), t = n, r = c(() => {
      const { color: o, size: e } = t;
      return !o && !e ? {} : {
        fontSize: d(e) ? void 0 : h(e),
        // display: "block",
        // width: "100px",
        // height: "100px",
        ...o ? { color: o } : {}
        // "--color": color, 这是ElementPlus的写法
      };
    });
    return (o, e) => (a(), m("i", p({
      class: l(s).b(),
      style: r.value
    }, o.$attrs), [
      u(o.$slots, "default")
    ], 16));
  }
}), v = S(b);
export {
  v as H,
  _ as i
};
