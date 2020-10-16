module.exports = {
  base: '/vuePress_demo/',
  dest: 'dist',
  port: '8080',
  title: 'vuePress_demo',
  description: 'vuePress_demo',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/logo'
    }]
  ],
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
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
    lastUpdated: '上次更新',
  },
}
