// This file connects to the remote Prisma DB and gives us ability to query w/ JS
const { Prisma } = require("prisma-binding");
const db = new Prisma({
  typeDefs: "src/generated/schema.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;