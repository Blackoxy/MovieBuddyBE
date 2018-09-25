const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

module.exports = {
  getAll() {
    return knex.select().from("movie_buds");
  },
  getBuddyById(id) {
    return knex
      .select()
      .from("movie_buds")
      .where("id", id);
  }
};
