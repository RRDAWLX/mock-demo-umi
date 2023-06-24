import DemoPage from '@/components/DemoPage';
import { getStatusList, queryList } from '@/services/demo1';
import React from 'react';

const Demo1: React.FC<unknown> = () => {
  return (
    <DemoPage
      getStatusList={getStatusList}
      queryList={queryList}
      message={'纯静态数据'}
    />
  );
};

export default Demo1;
