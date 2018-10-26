const Mutation = {
  async createSerie(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createEventSerie(
      { data: { ...args } },
      info
    );
    return item;
  },
  async deleteSerie(parent, args, ctx, info) {
    const item = await ctx.db.mutation.deleteEventSerie(
      { where: { ...args } },
      info
    );

    return item;
  },
  async createParticipant(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createParticipant(
      { data: { ...args } },
      info
    );

    return item;
  },
  async createEvent(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createEvent({ data: { ...args } }, info);

    return item;
  }
};

module.exports = Mutation;
