import { defineComponent as g, useSlots as y, computed as v, ref as C, watch as V, onMounted as x, openBlock as s, createElementBlock as c, normalizeClass as d, unref as a, createElementVNode as f, withDirectives as B, vModelCheckbox as S, renderSlot as w, toDisplayString as N, createCommentVNode as b } from "vue";
import { u as E } from "./hooks-_UOUWWH0.js";
import { w as D } from "./utils-DpO0IGfB.js";
const H = {
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  indeterminate: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String,
    default: ""
  }
}, I = {
  "update:modelValue": (t) => typeof t == "boolean",
  change: (t) => typeof t == "boolean"
}, M = ["disabled", "value"], R = { key: 0 }, z = /* @__PURE__ */ g({
  name: "ho-checkbox",
  __name: "checkbox",
  props: H,
  emits: I,
  setup(t, { emit: h }) {
    const o = E("checkbox", "ho"), i = h, r = y(), u = v({
      get() {
        return t.modelValue;
      },
      set(e) {
        i("update:modelValue", e);
      }
    }), m = C(), p = () => {
      m.value.indeterminate = t.indeterminate;
    };
    V(() => t.indeterminate, p), x(() => p());
    const k = (e) => {
      const n = !!e.target.checked;
      i("change", n);
    };
    return (e, l) => (s(), c("label", {
      class: d(a(o).b())
    }, [
      f("span", {
        class: d(a(o).e("input"))
      }, [
        B(f("input", {
          type: "checkbox",
          "onUpdate:modelValue": l[0] || (l[0] = (n) => u.value = n),
          disabled: e.disabled,
          ref_key: "inputRef",
          ref: m,
          value: e.label,
          onChange: k
        }, null, 40, M), [
          [S, u.value]
        ])
      ], 2),
      a(r).default || e.label ? (s(), c("span", {
        key: 0,
        class: d(a(o).e("label"))
      }, [
        w(e.$slots, "default"),
        a(r).default ? b("", !0) : (s(), c("span", R, N(e.label), 1))
      ], 2)) : b("", !0)
    ], 2));
  }
}), j = D(z);
export {
  j as H,
  I as a,
  H as c
};
