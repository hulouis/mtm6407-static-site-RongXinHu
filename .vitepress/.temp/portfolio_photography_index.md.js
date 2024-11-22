import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/photography_1.BEh5cwEh.jpg";
const _imports_1 = "/assets/photography_2.CgOEpGe4.png";
const _imports_2 = "/assets/photography_3.YZ-IRZMd.jpg";
const __pageData = JSON.parse('{"title":"Photography","description":"","frontmatter":{},"headers":[],"relativePath":"portfolio/photography/index.md","filePath":"portfolio/photography/index.md"}');
const _sfc_main = { name: "portfolio/photography/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="photography" tabindex="-1">Photography <a class="header-anchor" href="#photography" aria-label="Permalink to &quot;Photography&quot;">​</a></h1><div class="container my-5"><div class="row"><div class="col-md-12"><div class="card shadow-sm mb-4"><img${ssrRenderAttr("src", _imports_0)} class="card-img-top" alt="Project 1"><div class="card-body"><h5 class="card-title">Monument Valley</h5><p class="card-text">A responsive portfolio website built with VitePress and Bootstrap.</p></div></div></div><div class="col-md-12"><div class="card shadow-sm mb-4"><img${ssrRenderAttr("src", _imports_1)} class="card-img-top" alt="Project 2"><div class="card-body"><h5 class="card-title">Beautiful American West</h5><p class="card-text">A full-stack e-commerce application with payment integration.</p></div></div></div><div class="col-md-12"><div class="card shadow-sm mb-4"><img${ssrRenderAttr("src", _imports_2)} class="card-img-top" alt="Project 3"><div class="card-body"><h5 class="card-title">horse bend</h5><p class="card-text">A simple and minimalist blogging platform with Markdown support.</p></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("portfolio/photography/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
