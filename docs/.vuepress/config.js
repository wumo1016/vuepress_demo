module.exports = {
  base: '/',
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
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '目录1',
        link: '/test/'
      },
    ],
    sidebar: {
      '/test/': [{
        title: '介绍',
        path: '/test/',
      }, {
        title: '目录1',
        path: '/test/menu1_1/',
      }, ],

      '/': [{
          title: '介绍',
          path: '/',
        },
        {
          title: '目录1', // 必要的
          collapsable: false,
          children: [{
              title: '目录1_1',
              path: '/menu1_1/'
            },
            {
              title: '目录1_2',
              path: '/menu1_2/'
            },
          ]
        },
        {
          title: '目录2', // 必要的
          collapsable: false,
          children: [{
              title: '目录2_1',
              path: '/menu2_1/'
            },
            {
              title: '目录2_2',
              path: '/menu2_2/'
            },
          ]
        },
      ],
    },
    lastUpdated: 'Last Updated',
  },
}