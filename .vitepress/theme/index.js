// https://vitepress.dev/guide/custom-theme
import 'bootstrap'; // 引入 Bootstrap 脚本（如有动态组件需要）
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap 样式





export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {

    });
  },
  enhanceApp({ app, router, siteData }) {

  },
};
