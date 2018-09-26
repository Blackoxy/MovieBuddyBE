exports.up = function(knex, Promise) {
  return knex.schema.createTable("movie_titles", titles => {
    titles.increments("wish").primary();
    titles
      .integer("user_id")
      .unsigned()
      .references("user_id")
      .inTable("movie_buds")
      //.notNull()
      .onDelete("cascade");
    titles.text("title");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("movie_titles");
};
