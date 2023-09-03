import DemoPage from '@/components/DemoPage';
import React from 'react';

const message = (
  <>
    <h3>字面量静态数据</h3>
    <p>将所有的 mock 数据完完整整地写出来。</p>
  </>
);

const Demo1: React.FC<unknown> = () => {
  return <DemoPage demoPath="demo1" message={message} />;
};

export default Demo1;
