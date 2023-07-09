const config = {
  mode: 'site',
  title: 'Vue Guidebook',
  description: 'Vue 完全知识体系',
  base: '/black-vue-guidebook/',
  publicPath: '/black-vue-guidebook/',
  favicon: './favicon.ico',
  logo: 'https://img.mrsingsing.com/vue-guidebook-logo.png',
  hash: true,
  exportStatic: {},
  theme: {
    '@c-primary': '#42b983',
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/yyt520/black-vue-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
