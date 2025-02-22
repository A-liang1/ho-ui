import {
  require_lib
} from "./chunk-NVJGRCBM.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// ../../node_modules/.pnpm/vue3-highlightjs@1.0.5_vue@3.5.13_typescript@5.7.3_/node_modules/vue3-highlightjs/dist/vue3-highlight-es.js
var import_highlight = __toESM(require_lib());
function index(app) {
  app.directive("highlightjs", function(el, binding) {
    var codeNodes = el.querySelectorAll("code");
    for (var i = 0; i < codeNodes.length; i++) {
      var codeNode = codeNodes[i];
      if (typeof binding.value === "string") {
        codeNode.textContent = binding.value;
      }
      import_highlight.default.highlightBlock(codeNode);
    }
  });
}
var vue3_highlight_es_default = index;
export {
  vue3_highlight_es_default as default
};
//# sourceMappingURL=vue3-highlightjs.js.map
