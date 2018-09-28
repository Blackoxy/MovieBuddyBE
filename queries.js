const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

module.exports = {
  getAll() {
    return knex
      .select()
      .from("movie_buds")
      .fullOuterJoin(
        "buddies_titles",
        "movie_buds.id",
        "buddies_titles.buds_info"
      )
      .fullOuterJoin(
        "movie_titles",
        "movie_titles.id",
        "buddies_titles.titles_info"
      );
  },
  getBuddyById(id) {
    return knex("movie_buds").where("id", id);
  },
  getMovieById(id) {
    return knex("movie_titles").where("id", id);
  },
  createBuddy(buddy) {
    return knex("movie_buds")
      .insert(buddy)
      .returning("*");
  },
  createMovie(buddy) {
    return knex("movie_titles")
      .insert(buddy)
      .returning("*");
  },
  updateBuddy(id, body) {
    return knex
      .select()
      .from("movie_buds")
      .where("id", id)
      .update(body)
      .returning("*");
  },
  updateMovie(id, body) {
    return knex
      .select()
      .from("movie_titles")
      .where("id", id)
      .update(body)
      .returning("*");
  },
  deleteBuddy(lastName) {
    return knex
      .select()
      .from("movie_buds")
      .where("lastName", lastName)
      .del()
      .returning("*");
  },
  deleteMovie(id) {
    return knex
      .select()
      .from("movie_titles")
      .where("id", id)
      .del()
      .returning("*");
  },
  getQuote(id) {
    return knex
      .select()
      .from("movie_quotes")
      .where("quote_id", id);
  },
  getAllQuotes() {
    return knex("movie_quotes");
  }
};
