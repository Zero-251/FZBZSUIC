export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/user'
  ],
  tabBar: {
    list: [
      {
        iconPath: 'resource/message_outline.png',
        selectedIconPath: 'resource/message_outline.png',
        pagePath: 'pages/index/index',
        text: '消息',
      },
      {
        iconPath: 'resource/user_outline.png',
        selectedIconPath: 'resource/user_outline.png',
        pagePath: 'pages/user/user',
        text: '我的',
      },
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
