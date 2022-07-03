import React from 'react';
import Button from '../../Button';
import Icon from '../../Icon';
import Search from '../index';

const SearchDemo = ():JSX.Element => {
  return (
    <>
      <Search />
      <Search label="地址" />
      <Search label="清除按钮" clearable />
      <Search label="地址" value='只读文本' readonly />
      <Search placeholder='disabled' value="disabled" disabled />
      <Search showAction onAction={() => console.log('onAction')} />
      <Search inputAlign='center' />
      <Search shape="round" showAction placeholder="半圆框形状" />
      <Search showAction actionText="自定义文字" />
      <Search showAction={<Button type='primary' size="mini">搜索</Button>} />
      <Search leftIcon={<Icon name="search" />} />
      <Search rightIcon={<Icon name="search" />} />
      <Search background="red" />
      <Search onSearch={(e: any) => console.log('search:', e)} />
    </>
  );
}

export default SearchDemo;