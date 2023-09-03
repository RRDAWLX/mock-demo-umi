const { mock } = require('mockjs');

export default {
  'GET /api/demo3/list': (_req, res) => {
    res.json(
      mock({
        success: true,
        data: {
          'list|10': [
            {
              id: '@integer(10000000, 99999999)',
              taskName: '@ctitle(2, 10)',
              desc: '@csentence(10, 40)',
              startTime: Date.now(),
              endTime: Date.now(),
              'status|1': [1, 2, 3, 4],
            },
          ],
          total: 100,
          pageSize: 10,
          pageNo: 1,
        },
        errorCode: 0,
      }),
    );
  },
};
