import { Component, PropsWithChildren } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './AppLogo.png'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <View className='header'>
          <Image mode='aspectFit' style="width: 50%; margin-left: 8px" src="./AppLogo.png" />
        </View>
        <View className='content'>
          <Text>Hello world!</Text>
          <AtButton type='primary'>I need Taro UI</AtButton>
          <Text>Taro UI 支持 Vue 了吗？</Text>
          <AtButton type='primary' circle={true}>支持</AtButton>
          <Text>共建？</Text>
          <AtButton type='secondary' circle={true}>来</AtButton>
        </View>
      </View>
    )
  }
}
