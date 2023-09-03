import DemoPage from '@/components/DemoPage';
import React from 'react';

const message = (
  <>
    <h3>响应接口参数的动态数据</h3>
    <p>根据接口参数生成目标数据，可以更方便地对目标场景进行测试。</p>
  </>
);

const Demo4: React.FC<unknown> = () => {
  return <DemoPage demoPath="demo4" message={message} />;
};

export default Demo4;
