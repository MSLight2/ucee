export default {
  title: 'Ucee Mobile',
  mode: 'site',
  logo: 'https://i.postimg.cc/X76H9gs7/ucee-logo.png',
  favicon: 'https://i.postimg.cc/X76H9gs7/ucee-logo.png',
  sass: {},
  alias: {
    'MdDemos': '../../../src/components',
    // 此处定义的别名为组件demo使用的别名，当dumi引入demo生成文档时使用。
    // 路径是以demo为基础的相对路径，即demo引用组件时的路径，不是相对dumi文档的使用路径
    // 和上面的别名配置时有区别的。（大坑~）
    // 以Button组件的demo为例：cra启动时使用的是tsconfig指定的别名，dumi使用时是用这个别名。
    // dumi使用的别名的路径是Button的demo导入组件的路径，且要使用相对路径。
    // 总结：引用外部demo时，用的是dumi的别名，路径是外部demo的路径。
    'ucee-mobile': '../../../components.ts',
    'demos': '../../../demos',
  },
  resolve: {
    includes: ['docs']
  },
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  exportStatic: {},
  dynamicImport: {},
  theme: {
    '@c-primary': '#ff8f29',
    '@c-primary-dark': '#ff8f29',
  },
  navs: [
    {
      title: '指南',
      path: '/guide'
    },
    {
      title: '组件',
      path: '/components'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/MSLight2/ucee'
    }
  ]
}