const { forwardTo } = require("prisma-binding");
const Query = {
  eventSeries: forwardTo("db")
};

module.exports = Query;
