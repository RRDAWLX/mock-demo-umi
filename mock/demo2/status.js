export default {
  'GET /api/demo2/status': {
    success: true,
    data: {
      status: [
        { code: 1, desc: '未开始' },
        { code: 2, desc: '进行中' },
        { code: 3, desc: '已完成' },
        { code: 4, desc: '失败' },
      ],
    },
    errorCode: 0,
  },
};
