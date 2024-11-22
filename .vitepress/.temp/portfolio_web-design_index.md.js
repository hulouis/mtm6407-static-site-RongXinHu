import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from "./design_3.DR0zIhw-.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"portfolio/web-design/index.md","filePath":"portfolio/web-design/index.md"}');
const _sfc_main = { name: "portfolio/web-design/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="website-design" tabindex="-1">Website Design <a class="header-anchor" href="#website-design" aria-label="Permalink to &quot;Website Design&quot;">​</a></h2><div class="container my-5"><div class="row"><div class="col-md-12"><div class="card shadow-sm mb-4"><img${ssrRenderAttr("src", _imports_0)} class="card-img-top" alt="Project 1"><div class="card-body"><h5 class="card-title">Banner</h5><p class="card-text">A responsive portfolio website built with VitePress and Bootstrap.</p></div></div></div><div class="col-md-12"><div class="card shadow-sm mb-4"><img${ssrRenderAttr("src", _imports_1)} class="card-img-top" alt="Project 2"><div class="card-body"><h5 class="card-title">Banner</h5><p class="card-text">A full-stack e-commerce application with payment integration.</p></div></div></div><div class="col-md-12"><div class="card shadow-sm mb-4"><img${ssrRenderAttr("src", _imports_2)} class="card-img-top" alt="Project 3"><div class="card-body"><h5 class="card-title">Banner</h5><p class="card-text">A simple and minimalist blogging platform with Markdown support.</p></div></div></div></div></div><p><a href="/portfolio/web-design/restaurant.html">Restaurant Web Design</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("portfolio/web-design/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
