import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"portfolio/web-development/contact-book.md","filePath":"portfolio/web-development/contact-book.md"}');
const _sfc_main = { name: "portfolio/web-development/contact-book.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="contact-book-web-application" tabindex="-1">Contact Book Web Application <a class="header-anchor" href="#contact-book-web-application" aria-label="Permalink to &quot;Contact Book Web Application&quot;">​</a></h2><p>This is the page my contact Book Application</p><p>Contact me</p><p>name: Michael</p><p>email: <a href="mailto:hu200188@outlook.com" target="_blank" rel="noreferrer">hu200188@outlook.com</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("portfolio/web-development/contact-book.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactBook = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contactBook as default
};
