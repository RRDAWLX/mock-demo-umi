export default {
  'GET /api/demo3/status': {
    success: true,
    data: {
      status: [
        { code: 1, desc: '未开始' },
        { code: 2, desc: '进行中' },
        { code: 3, desc: '已完成' },
      ],
    },
    errorCode: 0,
  },
};
