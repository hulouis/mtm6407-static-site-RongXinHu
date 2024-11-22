import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/web_1.CiG5VadA.jpg";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"portfolio/web-development/index.md","filePath":"portfolio/web-development/index.md"}');
const _sfc_main = { name: "portfolio/web-development/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="web-development" tabindex="-1">Web Development <a class="header-anchor" href="#web-development" aria-label="Permalink to &quot;Web Development&quot;">​</a></h2><div class="container my-5"><div class="row"><div class="col-md-12"><div class="card shadow-sm mb-4"><img${ssrRenderAttr("src", _imports_0)} class="card-img-top" alt="Project 1"><div class="card-body"><h5 class="card-title">Introduce Myself</h5><p class="card-text"> Hello, my name is RongXinHu, and I am a recent graduate of the Interactive Media Design program at Algonquin College. I am passionate about web design and development, with a strong interest in creating user-friendly and visually appealing websites. Throughout my studies, I honed my skills in front-end development, responsive design, and user experience, while also gaining a solid foundation in coding languages like HTML, CSS, JavaScript, and basic backend technologies. </p><p class="card-text"> During my time at Algonquin College, I had the opportunity to work on various hands-on projects that allowed me to apply theoretical knowledge to real-world scenarios. These experiences not only improved my technical skills but also helped me develop strong problem-solving abilities and an eye for detail. </p><p class="card-text"> My ultimate goal is to build a career as a Web Designer or Web Developer, contributing to projects that enhance user experiences and bring innovative ideas to life. I am eager to learn and grow in this dynamic industry, continuously improving my expertise and staying updated with the latest technologies. </p><p class="card-text"> Thank you for taking the time to learn a bit about me. I look forward to connecting and exploring opportunities to collaborate! </p></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("portfolio/web-development/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
