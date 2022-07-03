import React from 'react';
import Tag from '../index';

const TagDemo = ():JSX.Element => {
  return (
    <>
      <Tag>标签</Tag>
      <Tag type='danger'>标签</Tag>
      <Tag type='warning'>标签</Tag>
      <Tag type='success'>标签</Tag>
      <div>plain</div>
      <Tag plain>标签</Tag>
      <Tag type='danger' plain>标签</Tag>
      <Tag type='warning' plain>标签</Tag>
      <Tag type='success' plain>标签</Tag>
      <div>size</div>
      <Tag size='medium'>标签</Tag>
      <Tag size='large'>标签</Tag>
      <div>round</div>
      <Tag round>标签</Tag>
      <Tag size='medium' round>标签</Tag>
      <Tag size='large' round>标签</Tag>
      <div>mark</div>
      <Tag mark>标签</Tag>
      <Tag mark markDir='left'>标签</Tag>
      <div>close</div>
      <Tag closeable>标签</Tag>
      <Tag closeable onClose={() => {
        console.log('tag close')
      }}>标签</Tag>
      <div>color</div>
      <Tag color='#19fad7'>标签</Tag>
      <Tag color='#d78bde' textColor="#e6160b">标签</Tag>
      <Tag color='#19fad7' plain>标签</Tag>
    </>
  );
}

export default TagDemo;