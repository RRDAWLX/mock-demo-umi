import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Alert } from 'antd';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';

type StateItem = { code: number; desc: string };

const DemoPage: React.FC<{
  getStatusList: () => Promise<any>;
  queryList: (params: any) => Promise<any>;
  message: ReactNode;
}> = ({ getStatusList, queryList, message }) => {
  const [statusList, setStatusList] = useState<Array<StateItem>>([]);

  const columns = useMemo(
    () => [
      {
        title: '任务 ID',
        dataIndex: 'id',
        hideInSearch: true,
        width: 80,
      },
      {
        title: '任务名称',
        dataIndex: 'taskName',
        hideInSearch: true,
        width: 120,
        ellipsis: {
          showTitle: true,
        },
      },
      {
        title: '任务描述',
        dataIndex: 'desc',
        hideInSearch: true,
        ellipsis: {
          showTitle: true,
        },
      },
      {
        title: '状态',
        dataIndex: 'status',
        width: 60,
        valueType: 'select',
        valueEnum: statusList.reduce<Record<number, { text: string }>>(
          (valueEnum, { code, desc }) => {
            valueEnum[code] = { text: desc };
            return valueEnum;
          },
          {},
        ),
      },
      {
        title: '开始时间',
        dataIndex: 'startTime',
        hideInSearch: true,
        width: 160,
        renderText(timestamp: number) {
          return new Date(timestamp).toJSON().slice(0, 19).replace('T', ' ');
        },
      },
      {
        title: '结束时间',
        dataIndex: 'endTime',
        hideInSearch: true,
        width: 160,
        renderText(timestamp: number) {
          return new Date(timestamp).toJSON().slice(0, 19).replace('T', ' ');
        },
      },
    ],
    [statusList],
  );

  useEffect(() => {
    getStatusList().then(({ data: { status } }) => {
      setStatusList(status);
    });
  }, []);

  return (
    <PageContainer
      header={{
        title: '任务列表',
      }}
    >
      <Alert type="info" style={{ marginBottom: 20 }} message={message} />
      <ProTable
        rowKey="id"
        columns={columns}
        request={async (params) => {
          const { data, success } = await queryList(params);
          return {
            data: data?.list || [],
            total: data?.total || 0,
            success,
          };
        }}
      />
    </PageContainer>
  );
};

export default DemoPage;
