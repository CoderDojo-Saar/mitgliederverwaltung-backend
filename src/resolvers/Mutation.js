const Mutation = {
  async createSerie(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createEventSerie(
      { data: { ...args } },
      info
    );
    return item;
  }
};

module.exports = Mutation;
