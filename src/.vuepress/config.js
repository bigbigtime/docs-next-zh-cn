const sidebar = {
  cookbook: [
    {
      title: 'Cookbook',
      collapsable: false,
      children: [
        '/cookbook/',
        '/cookbook/editable-svg-icons',
        '/cookbook/debugging-in-vscode',
        '/cookbook/automatic-global-registration-of-base-components'
      ]
    }
  ],
  guide: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/guide/installation',
        '/guide/introduction',
        '/guide/instance',
        '/guide/template-syntax',
        '/guide/data-methods',
        '/guide/computed',
        '/guide/class-and-style',
        '/guide/conditional',
        '/guide/list',
        '/guide/events',
        '/guide/forms',
        '/guide/component-basics'
      ]
    },
    {
      title: '深入组件',
      collapsable: false,
      children: [
        '/guide/component-registration',
        '/guide/component-props',
        '/guide/component-attrs',
        '/guide/component-custom-events',
        '/guide/component-slots',
        '/guide/component-provide-inject',
        '/guide/component-dynamic-async',
        '/guide/component-template-refs',
        '/guide/component-edge-cases'
      ]
    },
    {
      title: '过渡 & 动画',
      collapsable: false,
      children: [
        '/guide/transitions-overview',
        '/guide/transitions-enterleave',
        '/guide/transitions-list',
        '/guide/transitions-state'
      ]
    },
    {
      title: '可复用 & 组合',
      collapsable: false,
      children: [
        {
          title: '组合式 API',
          children: [
            '/guide/composition-api-introduction',
            '/guide/composition-api-setup',
            '/guide/composition-api-lifecycle-hooks',
            '/guide/composition-api-provide-inject',
            '/guide/composition-api-template-refs'
          ]
        },
        '/guide/mixins',
        '/guide/custom-directive',
        '/guide/teleport',
        '/guide/render-function',
        '/guide/plugins'
      ]
    },
    {
      title: '高阶指南',
      collapsable: false,
      children: [
        '/guide/web-components',
        {
          title: '响应性',
          children: [
            '/guide/reactivity',
            '/guide/reactivity-fundamentals',
            '/guide/reactivity-computed-watchers'
          ]
        },
        '/guide/optimizations',
        '/guide/change-detection'
      ]
    },
    {
      title: '工具',
      collapsable: false,
      children: [
        '/guide/single-file-component',
        '/guide/testing',
        '/guide/typescript-support',
        '/guide/mobile',
        '/guide/tooling/deployment'
      ]
    },
    {
      title: '规模化',
      collapsable: false,
      children: [
        '/guide/routing',
        '/guide/state-management',
        '/guide/ssr',
        '/guide/security'
      ]
    },
    {
      title: '无障碍',
      collapsable: false,
      children: [
        '/guide/a11y-basics',
        '/guide/a11y-semantics',
        '/guide/a11y-standards',
        '/guide/a11y-resources'
      ]
    }
  ],
  api: [
    '/api/application-config',
    '/api/application-api',
    '/api/global-api',
    {
      title: '选项',
      path: '/api/options-api',
      collapsable: false,
      children: [
        '/api/options-data',
        '/api/options-dom',
        '/api/options-lifecycle-hooks',
        '/api/options-assets',
        '/api/options-composition',
        '/api/options-misc'
      ]
    },
    '/api/instance-properties',
    '/api/instance-methods',
    '/api/directives',
    '/api/special-attributes',
    '/api/built-in-components.md',
    {
      title: '响应性 API',
      path: '/api/reactivity-api',
      collapsable: false,
      children: [
        '/api/basic-reactivity',
        '/api/refs-api',
        '/api/computed-watch-api',
        '/api/effect-scope',
      ]
    },
    '/api/composition-api',
    {
      title: '单文件组件',
      collapsable: false,
      children: [
        {
          title: '规范',
          path: '/api/sfc-spec'
        },
        {
          title: '工具',
          path: '/api/sfc-tooling'
        },
        {
          title: '<script setup>',
          path: '/api/sfc-script-setup'
        },
        {
          title: '<style> 特性',
          path: '/api/sfc-style'
        }
      ]
    }
  ],
  examples: [
    {
      title: '示例',
      collapsable: false,
      children: [
        '/examples/markdown',
        '/examples/commits',
        '/examples/grid-component',
        '/examples/tree-view',
        '/examples/svg',
        '/examples/modal',
        '/examples/elastic-header',
        '/examples/select2',
        '/examples/todomvc'
      ]
    }
  ],
  migration: [
    '/guide/migration/introduction',
    '/guide/migration/migration-build',
    {
      title: '细节',
      collapsable: false,
      children: [
        '/guide/migration/array-refs',
        '/guide/migration/async-components',
        '/guide/migration/attribute-coercion',
        '/guide/migration/attrs-includes-class-style',
        '/guide/migration/children',
        '/guide/migration/custom-directives',
        '/guide/migration/custom-elements-interop',
        '/guide/migration/data-option',
        '/guide/migration/emits-option',
        '/guide/migration/events-api',
        '/guide/migration/filters',
        '/guide/migration/fragments',
        '/guide/migration/functional-components',
        '/guide/migration/global-api',
        '/guide/migration/global-api-treeshaking',
        '/guide/migration/inline-template-attribute',
        '/guide/migration/key-attribute',
        '/guide/migration/keycode-modifiers',
        '/guide/migration/listeners-removed',
        '/guide/migration/mount-changes',
        '/guide/migration/props-data',
        '/guide/migration/props-default-this',
        '/guide/migration/render-function-api',
        '/guide/migration/slots-unification',
        '/guide/migration/suspense',
        '/guide/migration/transition',
        '/guide/migration/transition-as-root',
        '/guide/migration/transition-group',
        '/guide/migration/v-on-native-modifier-removed',
        '/guide/migration/v-model',
        '/guide/migration/v-if-v-for',
        '/guide/migration/v-bind',
        '/guide/migration/vnode-lifecycle-events',
        '/guide/migration/watch'
      ]
    }
  ],
  ssr: [
    ['/guide/ssr/introduction', 'Introduction'],
    '/guide/ssr/getting-started',
    '/guide/ssr/universal',
    '/guide/ssr/structure',
    '/guide/ssr/build-config',
    '/guide/ssr/server',
    '/guide/ssr/routing',
    '/guide/ssr/hydration'
  ],
  contributing: [
    {
      title: '贡献文档',
      collapsable: false,
      children: [
        '/guide/contributing/writing-guide',
        '/guide/contributing/doc-style-guide',
        '/guide/contributing/translations'
      ]
    }
  ]
}

module.exports = {
  title: 'Vue.js',
  description: 'Vue.js - The 渐进式 JavaScript 框架',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // localization for china
    [
      'script',
      {
        src: 'https://player.youku.com/iframeapi'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '文档',
        ariaLabel: '文档菜单',
        items: [
          {
            text: '教程',
            link: '/guide/introduction'
          },
          {
            text: '风格指南',
            link: '/style-guide/'
          },
          {
            text: 'Cookbook',
            link: '/cookbook/'
          },
          {
            text: '示例',
            link: '/examples/markdown'
          },
          {
            text: '贡献文档',
            link: '/guide/contributing/writing-guide'
          },
          {
            text: '从 Vue 2 迁移',
            link: '/guide/migration/introduction'
          }
        ]
      },
      {
        text: 'API 参考',
        link: '/api/'
      },
      {
        text: '生态系统',
        items: [
          {
            text: '社区',
            ariaLabel: '社区菜单',
            items: [
              {
                text: '团队',
                link: '/community/team/'
              },
              {
                text: '合作伙伴',
                link: '/community/partners'
              },
              {
                text: '加入',
                link: '/community/join/'
              },
              {
                text: '主题',
                link: '/community/themes/'
              }
            ]
          },
          {
            text: '官方项目',
            items: [
              {
                text: 'Vue Router',
                link: 'https://next.router.vuejs.org/'
              },
              {
                text: 'Vuex',
                link: 'https://next.vuex.vuejs.org/'
              },
              {
                text: 'Vue CLI',
                link: 'https://cli.vuejs.org/'
              },
              {
                text: 'Vue Test Utils',
                link: 'https://next.vue-test-utils.vuejs.org/guide/'
              },
              {
                text: 'Devtools',
                link: 'https://devtools.vuejs.org'
              },
              {
                text: 'Weekly news',
                link: 'https://news.vuejs.org/'
              },
              {
                text: 'Blog',
                link: 'https://blog.vuejs.org/'
              }
            ]
          }
        ]
      },
      {
        text: '支持 Vue',
        link: '/support-vuejs/',
        items: [
          {
            text: '一次性捐款',
            link: '/support-vuejs/#一次性捐款'
          },
          {
            text: '周期性捐款',
            link: '/support-vuejs/#周期性赞助'
          },
          {
            text: '贴纸',
            link: 'https://www.smallsticker.com/%E8%B4%B4%E7%BA%B8/vue.html'
          },
          {
            text: '周边',
            link: 'https://osholic.com/?utm_source=vue&utm_medium=dropdown'
          },
          {
            text: 'T-Shirt 商店',
            link: 'https://vue.threadless.com/'
          }
        ]
      },
      {
        text: '多语言',
        link: '#',
        items: [
          // Translation maintainers: Please include the link below to the English documentation
          {
            text: 'English',
            link: 'https://v3.vuejs.org/',
            isTranslation: true
          },
          // {
          //   text: '中文',
          //   link: 'https://v3.cn.vuejs.org/',
          //   isTranslation: true
          // },
          {
            text: '한국어',
            link: 'https://v3.ko.vuejs.org/',
            isTranslation: true
          },
          {
            text: '日本語',
            link: 'https://v3.ja.vuejs.org/',
            isTranslation: true
          },
          {
            text: 'Русский',
            link: 'https://v3.ru.vuejs.org/ru/',
            isTranslation: true
          },
          {
            text: '更多翻译',
            link: '/guide/contributing/translations#community-translations'
          }
        ]
      }
    ],
    repo: 'vuejs/docs-next-zh-cn',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '最近更新时间',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/migration/': sidebar.migration,
      '/guide/contributing/': sidebar.contributing,
      '/guide/ssr/': sidebar.ssr,
      '/guide/': sidebar.guide,
      '/community/': sidebar.guide,
      '/cookbook/': sidebar.cookbook,
      '/api/': sidebar.api,
      '/examples/': sidebar.examples
    },
    smoothScroll: false,
    algolia: {
      indexName: 'vuejs_cn3',
      apiKey: '773de665ca11d74cede4e35ecff46931'
    },
    carbonAds: {
      carbon: 'CEBDT27Y',
      custom: 'CKYD62QM',
      placement: 'vuejsorg'
    },
    topBanner: false
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer(timestamp) {
          const date = new Date(timestamp)

          const digits = [
            date.getUTCFullYear(),
            date.getUTCMonth() + 1,
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
          ].map(num => String(num).padStart(2, '0'))

          return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(
            /{(\d)}/g,
            (_, num) => digits[num]
          )
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '内容有更新',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
