const { mock } = require('mockjs');

const { list } = mock({
  'list|5-100': [
    {
      id: '@integer(10000000, 99999999)',
      taskName: '@ctitle(2, 10)',
      desc: '@csentence(10, 40)',
      startTime: Date.now(),
      endTime: Date.now(),
      'status|1': [1, 2, 3],
    },
  ],
});

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
