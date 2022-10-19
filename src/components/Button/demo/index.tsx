import React from 'react';
import { Button, Icon, LoadingIcon } from 'ucee-mobile';
import { DemoBlock } from 'demos';

const ButtonDemo = (): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <DemoBlock title='按钮类型' space>
        <Button>默认按钮</Button>
        <Button type='primary'>主要按钮</Button>
        <Button type='info'>信息按钮</Button>
        <Button type='warning'>警告按钮</Button>
        <Button type='danger'>危险按钮</Button>
        <Button type='link'>连接按钮</Button>
      </DemoBlock>

      <DemoBlock title='朴素按钮' space>
        <Button plain>朴素按钮</Button>
        <Button type='primary' plain>朴素按钮</Button>
        <Button type='warning' plain>朴素按钮</Button>
      </DemoBlock>

      <DemoBlock title='禁用状态' space>
        <Button disabled>禁止按钮</Button>
        <Button type='primary' disabled>禁止按钮</Button>
        <Button type='info' disabled>禁止按钮</Button>
      </DemoBlock>

      <DemoBlock title='加载状态' space>
        <Button type='primary' loading/>
        <Button type='primary' loading loadingIcon='bar'>加载按钮</Button>
        <Button type='primary' loading loadingIcon='ring'>加载按钮</Button>
      </DemoBlock>

      <DemoBlock title='圆形按钮-不同尺寸' space>
        <Button type='primary' shape='round' size='mini'>半圆</Button>
        <Button type='primary' shape='round' size='small'>半圆</Button>
        <Button type='primary' shape='round'>半圆</Button>
        <Button type='primary' shape='circle'>圆</Button>
      </DemoBlock>

      <DemoBlock title='块级按钮'>
        <Button type='primary' block>块级按钮</Button>
      </DemoBlock>      

      <DemoBlock title='自定义颜色' space>
        <Button type='primary' color='red'>单色按钮</Button>
        <Button type='primary' color='red' plain>单色按钮</Button>
        <Button type='primary' color='linear-gradient(to right, #4bb0ff, #6149f6)'>渐变按钮</Button>
      </DemoBlock>

      <DemoBlock title='细边框按钮' space>
        <Button type='default' plain hairline>细边框按钮</Button>
        <Button type='primary' plain hairline>细边框按钮</Button>
      </DemoBlock>

      <DemoBlock title='图标按钮' space>
        <Button type='primary' icon={<Icon name='people' />}></Button>
        <Button type='primary' icon={<Icon name='people' />}>图标按钮</Button>
        <Button type='primary' icon='https://img.yzcdn.cn/vant/user-active.png' plain>图片按钮</Button>
      </DemoBlock>
    </>
  )
}

export default ButtonDemo;