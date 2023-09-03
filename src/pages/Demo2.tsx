import DemoPage from '@/components/DemoPage';
import React from 'react';

const message = (
  <>
    <h3>随机生成的静态数据</h3>
    <p>在项目启动时根据数据模式生成任意数量的数据。</p>
  </>
);

const Demo2: React.FC<unknown> = () => {
  return <DemoPage demoPath="demo2" message={message} />;
};

export default Demo2;
