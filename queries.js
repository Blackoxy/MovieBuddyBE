const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

module.exports = {
  getAll() {
    return knex("movie_buds");
  },
  get(id) {
    return knex
      .select()
      .from("movie_buds")
      .where("user_id", id);
  },
  create(buddy) {
    return knex("movie_buds").insert(buddy, [
      "id",
      "firstName",
      "lastName",
      "userId"
    ]);
  },
  update(id, body) {
    return knex
      .select()
      .from("movie_buds")
      .where("id", id)
      .update(body)
      .returning("*");
  },
  delete(id) {
    return knex
      .select()
      .from("movie_buds")
      .where("id", id)
      .del()
      .returning("*");
  },
  getAllWishes() {
    return knex("movie_titles");
  },
  getWish(wish) {
    return knex
      .select()
      .from("movie_titles")
      .where("wish", wish);
  },
  getMyWishlist(user) {
    return knex
      .select()
      .from("movie_titles")
      .where("user_id", user);
  },
  getMovie(title) {
    return knex
      .select()
      .from("movie_titles")
      .where("title", title);
  },
  getQuote(id) {
    return knex
      .select()
      .from("movie_quotes")
      .where("quote_id", id);
  }
};
