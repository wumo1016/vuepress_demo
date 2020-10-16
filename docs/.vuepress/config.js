module.exports = {
  base: '/vuepress_demo/',
  dest: 'dist',
  port: '8080',
  title: 'vuepress_demo',
  description: 'vuepress_demo',
  head: [
    ['link', { rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig: { // https://www.vuepress.cn/theme/
    // 页面底部右侧左侧 github配置相关 
    repo: 'wumo1016/vuepress_demo',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    // 页面底部右侧
    lastUpdated: '上次更新',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '2.x版本',
        link: '/v2/'
      },
      {
        text: '3.x版本',
        link: '/v3/'
      },
    ],
    sidebar: {
      '/v2/': [
        {
          title: '首页',
          path: '/v2/',
        },
        {
          title: '组件化',
          collapsable: false,
          children: [
            ['components/', 'Introduction'], // 左侧菜单重命名
            'components/createComponent', // 左侧菜单默认为页面内以及标题
            'components/patch',
          ]
        },
        {
          title: '响应式对象',
          collapsable: false,
          children: [
            'reactive/',
            'reactive/object',
            'reactive/getters',
          ]
        },
      ],
      '/v3/': [
        {
          title: '首页',
          path: '/v3/',
        },
      ]
    },
  },
}
