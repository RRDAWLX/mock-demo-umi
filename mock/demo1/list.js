const list = [
  {
    id: 12345678,
    taskName: '任务名称',
    desc: '描述描述描述描述描述描述描述',
    startTime: Date.now(),
    endTime: Date.now(),
    status: 1,
  },
  {
    id: 22345678,
    taskName: '任务名称',
    desc: '描述描述描述描述描述描述描述',
    startTime: Date.now(),
    endTime: Date.now(),
    status: 1,
  },
];

export default {
  'GET /api/demo1/list': {
    success: true,
    data: {
      list,
      total: list.length,
    },
    errorCode: 0,
  },
};
