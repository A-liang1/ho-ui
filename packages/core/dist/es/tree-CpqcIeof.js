import { openBlock as f, createElementBlock as K, createElementVNode as g, defineComponent as A, inject as J, h as Q, computed as $, normalizeClass as v, unref as u, normalizeStyle as U, createVNode as O, withCtx as F, createBlock as w, createCommentVNode as W, ref as k, watch as j, provide as X, useSlots as Y } from "vue";
import { u as E } from "./hooks-_UOUWWH0.js";
import { H as Z } from "./icon-D22TwgKc.js";
import { H as _ } from "./checkbox-B_p0l5RZ.js";
import { H as ee } from "./virtual-list-UXktPVEn.js";
import { w as te } from "./utils-DpO0IGfB.js";
const ne = {
  data: {
    type: Array,
    default: () => []
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  onLoad: Function,
  selectedKeys: Array,
  selectable: {
    type: Boolean,
    default: !0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  showCheckbox: {
    type: Boolean,
    default: !1
  },
  defaultCheckedKeys: {
    type: Array,
    default: () => []
  }
}, se = {
  node: {
    type: Object,
    required: !0
  },
  expanded: {
    type: Boolean,
    default: !1
  },
  loadingKeys: {
    type: Object,
    default: () => /* @__PURE__ */ new Set(),
    required: !0
  },
  selectedKeys: {
    type: Array,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: !1
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean
}, le = {
  "update:selectedKeys": (t) => t
}, ae = {
  toggle: (t) => t,
  select: (t) => t,
  checked: ({ node: t, value: d }) => typeof d == "boolean"
}, H = Symbol(), oe = {
  node: {
    type: Object,
    required: !0
  }
}, de = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, re = /* @__PURE__ */ Object.assign({
  name: "Switcher"
}, {
  __name: "Switcher",
  setup(t) {
    return (d, n) => (f(), K("svg", de, n[0] || (n[0] = [
      g("g", { transform: "translate(24, 0) scale(-1, 1)" }, [
        g("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
      ], -1)
    ])));
  }
}), ce = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  class: "loading"
}, ie = /* @__PURE__ */ Object.assign({
  name: "Loading"
}, {
  __name: "Loading",
  setup(t) {
    return (d, n) => (f(), K("svg", ce, n[0] || (n[0] = [
      g("path", {
        d: "M25 5 A20 20 0 0 1 45 25",
        fill: "none",
        stroke: "#000",
        "stroke-width": "4"
      }, null, -1),
      g("path", {
        d: "M25 5 A20 20 0 0 0 45 25",
        fill: "none",
        stroke: "#fff",
        "stroke-width": "4"
      }, null, -1)
    ])));
  }
}), ue = A({
  name: "TreeNodeContext",
  props: oe,
  setup(t) {
    const d = E("tree-node", "ho"), n = J(H), { node: r } = t;
    return () => n != null && n.slots.default ? n == null ? void 0 : n.slots.default({ node: r }) : Q("span", { class: d.e("label") }, r.label);
  }
}), he = (t, d) => {
  const n = t.__vccOpts || t;
  for (const [r, y] of d)
    n[r] = y;
  return n;
};
function fe(t, d, n, r, y, x) {
  return null;
}
const ye = /* @__PURE__ */ he(ue, [["render", fe]]), me = /* @__PURE__ */ A({
  __name: "treeNode",
  props: se,
  emits: ae,
  setup(t, { emit: d }) {
    const n = E("tree-node", "ho"), r = d, y = () => {
      r("toggle", t.node);
    }, x = $(() => t.loadingKeys.has(t.node.key)), p = $(() => t.selectedKeys.includes(t.node.key)), b = () => {
      t.node.disabled || r("select", t.node);
    }, m = (a) => {
      r("checked", { node: t.node, value: a });
    };
    return (a, C) => (f(), K("div", {
      class: v([u(n).b(), u(n).is("selected", p.value), u(n).is("disabled", a.node.disabled)])
    }, [
      g("div", {
        class: v(u(n).e("content")),
        style: U({ paddingLeft: `${a.node.level * 16}px` }),
        onClick: b
      }, [
        g("span", {
          class: v([
            u(n).e("expand-icon"),
            { expanded: a.expanded && !a.node.isLeaf },
            u(n).is("leaf", a.node.isLeaf)
          ]),
          onClick: y
        }, [
          O(u(Z), {
            size: "16px",
            color: "pink"
          }, {
            default: F(() => [
              x.value ? (f(), w(ie, { key: 1 })) : (f(), w(re, { key: 0 }))
            ]),
            _: 1
          })
        ], 2),
        a.showCheckbox ? (f(), w(u(_), {
          key: 0,
          "model-value": a.checked,
          disabled: a.disabled,
          indeterminate: a.indeterminate,
          onChange: m
        }, null, 8, ["model-value", "disabled", "indeterminate"])) : W("", !0),
        O(ye, { node: a.node }, null, 8, ["node"])
      ], 6)
    ], 2));
  }
}), ke = /* @__PURE__ */ A({
  name: "ho-tree",
  __name: "tree",
  props: ne,
  emits: le,
  setup(t, { emit: d }) {
    const n = E("tree", "ho"), r = d, y = k([]), p = ((e, l, s) => ({
      getKey(o) {
        return o[e];
      },
      getLabel(o) {
        return o[l];
      },
      getChildren(o) {
        return o[s];
      }
    }))(t.keyField, t.labelField, t.childrenField), b = (e, l = null) => {
      const s = (c, h = null) => c.map((i) => {
        const N = p.getChildren(i) || [], B = {
          key: p.getKey(i),
          label: p.getLabel(i),
          children: [],
          level: h ? h.level + 1 : 0,
          rawNode: i,
          isLeaf: i.isLeaf ?? N.length === 0,
          disabled: !!i.disabled,
          parentKey: h == null ? void 0 : h.key
        };
        return N.length > 0 && (B.children = s(N, B)), B;
      });
      return s(e, l);
    };
    j(
      () => t.data || [],
      (e) => {
        y.value = b(e);
      },
      { immediate: !0 }
    );
    const m = k(new Set(t.defaultExpandedKeys)), a = $(() => {
      const e = m.value, l = [], s = y.value || [], o = [];
      for (let c = s.length - 1; c >= 0; c--)
        o.push(s[c]);
      for (; o.length; ) {
        const c = o.pop();
        if (!c) break;
        if (l.push(c), e.has(c.key)) {
          const h = c.children;
          if (h)
            for (let i = h.length - 1; i >= 0; i--)
              o.push(h[i]);
        }
      }
      return l;
    }), C = (e) => m.value.has(e.key), S = k(/* @__PURE__ */ new Set()), z = (e) => {
      if (!e.children.length && !e.isLeaf) {
        const l = S.value;
        l.has(e.key) || (l.add(e.key), t.onLoad && t.onLoad(e.rawNode).then((s) => {
          e.rawNode.children = s, e.children = b(s, e), l.delete(e.key);
        }));
      }
    }, T = (e) => {
      m.value.add(e.key), z(e);
    }, I = (e) => {
      m.value.delete(e.key);
    }, V = (e) => {
      C(e) && !S.value.has(e.key) ? I(e) : T(e);
    }, L = k([]);
    j(
      () => t.selectedKeys,
      (e) => {
        e && (L.value = e);
      },
      { immediate: !0 }
    );
    const q = (e) => {
      const l = e.key;
      let s = Array.from(L.value);
      t.selectable && (t.multiple ? s = s.includes(l) ? s.filter((o) => o !== l) : [...s, l] : s = [l], r("update:selectedKeys", s));
    };
    X(H, {
      slots: Y()
    });
    const M = k(new Set(t.defaultCheckedKeys)), P = (e) => M.value.has(e.key), R = (e) => !!e.disabled;
    k(/* @__PURE__ */ new Set());
    const D = (e) => !0, G = ({ node: e, value: l }) => {
      console.log(e, l);
    };
    return (e, l) => (f(), K("div", {
      class: v(u(n).b())
    }, [
      O(u(ee), {
        items: a.value,
        remain: 8,
        size: 35
      }, {
        a: F(({ node: s }) => [
          (f(), w(me, {
            key: s.key,
            node: s,
            expanded: C(s),
            loadingKeys: S.value,
            onToggle: V,
            selectedKeys: L.value,
            onSelect: q,
            "show-checkbox": e.showCheckbox,
            checked: P(s),
            disabled: R(s),
            indeterminate: D(),
            onChecked: G
          }, null, 8, ["node", "expanded", "loadingKeys", "selectedKeys", "show-checkbox", "checked", "disabled", "indeterminate"]))
        ]),
        _: 1
      }, 8, ["items"])
    ], 2));
  }
});
te(ke);
export {
  se as a,
  le as b,
  ae as c,
  H as d,
  oe as e,
  ne as t
};
