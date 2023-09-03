const { mock } = require('mockjs');
const { status: statusList } = require('./status');

const total = 99;

export default {
  'GET /api/demo5/list': (req, res) => {
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
              'status|1': status
                ? [status]
                : statusList.map((item) => item.code),
              // 文档：http://mockjs.com/examples.html#Function
              _time: function () {
                let startTime = 0;
                let endTime = 0;
                let now = Date.now();

                if (this.status > 1) {
                  startTime = now - Math.floor(Math.random() * 10 ** 8);
                }

                if (this.status > 2) {
                  endTime = now + Math.floor(Math.random() * 10 ** 8);
                }

                this.startTime = startTime;
                this.endTime = endTime;
              },
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
