import DemoPage from '@/components/DemoPage';
import React from 'react';

const message = (
  <>
    <h3>简单的动态数据</h3>
    <p>
      每次请求接口时都会动态生成一批新数据，只要多点几次按钮，就肯定可以覆盖各种场景的数据。
    </p>
  </>
);

const Demo3: React.FC<unknown> = () => {
  return <DemoPage demoPath="demo3" message={message} />;
};

export default Demo3;
