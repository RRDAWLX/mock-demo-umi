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
  'GET /api/demo2/list': (_req, res) => {
    res.json({
      success: true,
      data: {
        list,
        total: list.length,
        pageSize: 10,
        pageNo: 1,
      },
      errorCode: 0,
    });
  },
};
