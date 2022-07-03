import React from 'react';
import Button from '../index';
import Icon from '../../Icon';
import DanceBar from '../../Loading/components/DanceBar'

const ButtonDemo = (): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <Button>默认按钮</Button>
      <Button type='primary'>主要按钮</Button>
      <Button type='info'>信息按钮</Button>
      <Button type='warning'>警告按钮</Button>
      <Button type='danger'>危险按钮</Button>
      <Button type='link'>连接按钮</Button>

      <Button plain>朴素按钮</Button>
      <Button type='primary' plain>朴素按钮</Button>
      <Button type='primary' disabled>禁止按钮</Button>

      <Button type='primary' shape='round' size='mini'>半圆</Button>
      <Button type='primary' shape='round' size='small'>半圆</Button>
      <Button type='primary' shape='round'>半圆</Button>
      <Button type='primary' shape='circle'>圆</Button>

      <Button type='primary' block>块级按钮</Button>

      <Button type='primary' color='red'>自定义颜色</Button>
      <Button type='primary' color='red' plain>自定义颜色</Button>
      <Button type='primary' color='linear-gradient(to right, #4bb0ff, #6149f6)'>渐变按钮</Button>

      <Button type='default' plain hairline>细边框按钮</Button>
      <Button type='primary' plain hairline>细边框按钮</Button>

      <Button type='primary' icon={<Icon name='people' />}></Button>
      <Button type='primary' icon={<Icon name='people' />}>图标按钮</Button>
      <Button type='primary' icon='https://img.yzcdn.cn/vant/user-active.png' plain>图片按钮</Button>

      <Button type='primary' loading>加载按钮</Button>
      <Button type='primary' loading loadingIcon='ring' loadingSize={20}>加载按钮</Button>
      <Button
        type='primary'
        loading={loading}
        loadingIcon={<DanceBar size={20} color="#fff" />}
        onClick={() => {
          setLoading(!loading);
          setTimeout(() => {
            setLoading(false);
          }, 2000)
        }}
        >
          点击加载
      </Button>
    </>
  )
}

export default ButtonDemo;