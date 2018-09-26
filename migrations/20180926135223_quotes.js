exports.up = function(knex, Promise) {
  return knex.schema.createTable("movie_quotes", quotes => {
    quotes.increments("quote_id").primary();
    quotes.integer("user_id").unsigned();
    quotes.text("movie");
    quotes.text("quote");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("movie_quotes");
};
