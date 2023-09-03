const { mock } = require('mockjs');

const total = 99;

export default {
  'GET /api/demo4/list': (req, res) => {
    const { pageSize, current, status } = req.query;
    const totalPages = Math.ceil(total / pageSize);
    // 要生成的数据列表的长度
    const size =
      current > totalPages
        ? 0
        : current === pageSize
        ? total % pageSize
        : pageSize;

    res.json(
      mock({
        success: true,
        data: {
          [`list|${size}`]: [
            {
              id: '@integer(10000000, 99999999)',
              taskName: '@ctitle(2, 10)',
              desc: '@csentence(10, 40)',
              startTime: Date.now(),
              endTime: Date.now(),
              'status|1': status ? [status] : [1, 2, 3, 4],
            },
          ],
          total,
          pageSize,
          pageNo: current,
        },
        errorCode: 0,
      }),
    );
  },
};
