import { defineComponent as x, ref as h, reactive as N, computed as s, watch as k, onMounted as M, openBlock as d, createElementBlock as v, normalizeClass as i, unref as o, createElementVNode as y, normalizeStyle as H, Fragment as R, renderList as S, renderSlot as w } from "vue";
import { u as V } from "./hooks-_UOUWWH0.js";
import { w as A } from "./utils-DpO0IGfB.js";
const B = /* @__PURE__ */ x({
  __name: "virtual-list",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    remain: {
      type: Number,
      default: 8
    },
    size: {
      type: Number,
      default: 35
    }
  },
  setup(e) {
    const l = V("vl", "ho"), n = h(), r = h(), t = N({
      start: 0,
      end: e.remain,
      offset: 0
    }), m = s(() => Math.min(t.start, e.remain)), g = s(() => Math.max(e.items.length - t.end, e.remain)), z = s(() => e.items.slice(t.start - m.value, t.end + g.value)), c = () => {
      const a = e.remain * e.size, u = e.items.length * e.size;
      n.value && (n.value.style.height = a + "px"), r.value && (r.value.style.height = u + "px");
    };
    k(() => e.items.length, c), M(() => c());
    const b = () => {
      const a = n.value.scrollTop;
      t.start = Math.floor(a / e.size), t.end = Math.min(t.start + e.remain, e.items.length), t.offset = t.start * e.size - m.value * e.size;
    };
    return (a, u) => (d(), v("div", {
      class: i(o(l).b()),
      ref_key: "containerRef",
      ref: n,
      onScroll: b
    }, [
      y("div", {
        class: i(o(l).e("phantom")),
        ref_key: "phantomRef",
        ref: r
      }, [
        y("div", {
          class: i(o(l).e("list")),
          style: H({ transform: `translateY(${t.offset}px)` })
        }, [
          (d(!0), v(R, null, S(z.value, (f) => w(a.$slots, "a", {
            node: f,
            key: f.id
          })), 128))
        ], 6)
      ], 2)
    ], 34));
  }
}), $ = {
  items: {
    type: Array,
    required: !0
  },
  remain: {
    type: Number,
    default: 8
  },
  size: {
    type: Number,
    default: 35
  }
}, q = A(B);
export {
  q as H,
  $ as v
};
