import React from 'react';
import CellGroup from '../../CellGroup';
import Icon from '../../Icon';
import Tag from '../../Tag';
import Cell from '../index';

const CellDemo = ():JSX.Element => {
  return (
    <>
      <CellGroup>
        <Cell title="单元格" />
        <Cell title="单元格" value='内容' />
        <Cell title="单元格" value='内容' label='描述信息' />
        <Cell title="单元格" value='内容' label='描述信息' center />
      </CellGroup>

      <div>large</div>
      <CellGroup>
        <Cell title="单元格" value='内容' size='large' />
        <Cell title="单元格" value='内容' label='描述信息' size='large' />
      </CellGroup>

      <div>right-icon</div>
      <CellGroup>
        <Cell title="单元格" value='内容' isLink />
        <Cell title="单元格" value='内容' label='描述信息' isLink />
      </CellGroup>

      <div>自定义</div>
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

      <div>link</div>
      <CellGroup>
        <Cell title="单元格" url="https://www.baidu.com/" />
      </CellGroup>
      <div>click</div>
      <CellGroup>
        <Cell title="单元格" onClick={() => console.log('cell click')} />
      </CellGroup>
    </>
  );
}

export default CellDemo;