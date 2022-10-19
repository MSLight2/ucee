import React from 'react';
import { Cell, CellGroup, Tag, Icon } from 'ucee-mobile';
import { DemoBlock } from 'demos';

const CellDemo = ():JSX.Element => {
  return (
    <>
      <DemoBlock title='基础用法' setction>
        <Cell title="单元格" />
        <Cell title="单元格" value='内容' />
        <Cell title="单元格" value='内容' label='描述信息' />
      </DemoBlock>

      <DemoBlock title='单元格大小' setction>
        <Cell title="单元格" value='内容' size='large' />
        <Cell title="单元格" value='内容' label='描述信息' size='large' />
      </DemoBlock>

      <DemoBlock title='展示箭头' setction>
        <CellGroup>
          <Cell title="单元格" value='内容' isLink />
          <Cell title="单元格" value='内容' label='描述信息' isLink />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title='图标' setction>
        <CellGroup>
          <Cell title={
            <>
              单元格
              <Tag>标签</Tag>
            </>
          } value='内容' />
          <Cell title="单元格" value='内容' isLink icon={<Icon name='people' size={18} />} />
          <Cell title="单元格" value='内容' isLink icon='https://img.yzcdn.cn/vant/user-active.png' />
        </CellGroup>
      </DemoBlock>

      <DemoBlock title='垂直居中' setction>
        <Cell title="单元格" value='内容' label='描述信息' center />
      </DemoBlock>
      
      <DemoBlock title='页面导航' setction>
        <CellGroup>
          <Cell title="跳转百度" isLink url="https://www.baidu.com/" />
          <Cell title="单元格" isLink onClick={() => console.log('cell click')} />
        </CellGroup>
      </DemoBlock>
    </>
  );
}

export default CellDemo;