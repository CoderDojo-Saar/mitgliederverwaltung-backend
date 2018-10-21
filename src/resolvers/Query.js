const { forwardTo } = require("prisma-binding");
const Query = {
  eventSeries: forwardTo("db"),
  participants: forwardTo("db"),
  contacts: forwardTo("db")
};

module.exports = Query;
