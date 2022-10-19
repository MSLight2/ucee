import React from 'react';
import { Icon, Rate  } from 'ucee-mobile';

const RateDemo = ():JSX.Element => {
  return (
    <>
      <p>基础用法</p>
      <Rate value={2} />
      <br/>
      <br/>

      <p>只读</p>
      <Rate value={2} readOnly />
      <br/>
      <br/>

      <p>禁用</p>
      <Rate value={2} disabled />
      <br/>
      <br/>

      <p>半星</p>
      <Rate value={3.4} allowClear allowHalf readOnly />只读 <br/>
      <Rate value={3.5} allowClear allowHalf iconSize={26} />
      <br/>
      <br/>

      <p>自定义颜色</p>
      <Rate value={3} activeColor="#ff5500" /><br/>
      <Rate value={3} unActiveColor="#1989fa" />
      <br/>
      <br/>

      <p>自定义图标</p>
      <Rate value={2} customRate={<Icon name="like-fill" />} /><br/>
      <Rate value={2} customRate={<Icon name="like-fill" />} activeColor="#ff5500" /><br/>
      <Rate value={2} customRate={<p>星</p>} />
      <br/>
      <br/>

      <p>onChange监听</p>
      <Rate value={3} onChange={(val) => console.log('current:', val)} />
      <br/>
    </>
  );
}

export default RateDemo;