import DemoPage from '@/components/DemoPage';
import React from 'react';

const message = (
  <>
    <h3>有关联性的数据</h3>
    <p>
      数据有关联，可能时两个接口间的数据有关联，也有可能是一个接口内的两个或多个字段有关联。通过生成有关联性的数据，可以更充分地对功能进行测试。
    </p>
  </>
);

const Demo5: React.FC<unknown> = () => {
  return <DemoPage demoPath="demo5" message={message} />;
};

export default Demo5;
