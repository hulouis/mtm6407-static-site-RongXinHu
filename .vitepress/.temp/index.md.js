import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"MTM6407","text":"Web Dev Iv","tagline":"My great project tagline","image":{"src":"/boy.png","alt":"factorys"},"actions":[{"theme":"brand","text":"Web Development","link":"/portfolio/web-development"},{"theme":"alt","text":"Web Design","link":"/portfolio/web-design/restaurant"},{"theme":"alt","text":"Photography","link":"/portfolio/photography/still-life"}]},"features":[{"title":"Contact Book App","details":"Visit here","link":"/portfolio/web-development/contact-book"},{"title":"web-design","details":"Visit here","link":"/portfolio/web-design/restaurant"},{"title":"web development","details":"Visit here","link":"/portfolio/web-development/index"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
