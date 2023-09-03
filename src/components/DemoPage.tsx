import { getStatusList, queryList } from '@/services';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Alert, Tag } from 'antd';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';

const status = {
  1: 'default',
  2: 'processing',
  3: 'success',
  4: 'error',
} as const;

type StateItem = { code: keyof typeof status; desc: string };

const DemoPage: React.FC<{
  demoPath: string;
  message: ReactNode;
}> = ({ demoPath, message }) => {
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
        width: 80,
        valueType: 'select',
        valueEnum: statusList.reduce<Record<number, ReactNode>>(
          (valueEnum, { code, desc }) => {
            valueEnum[code] = <Tag color={status[code]}>{desc}</Tag>;
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
    getStatusList(demoPath)().then(
      ({ data: { status } }: { data: { status: StateItem[] } }) => {
        setStatusList(status);
      },
    );
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
          const { data, success } = await queryList(demoPath)(params);
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
