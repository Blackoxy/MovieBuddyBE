exports.up = function(knex, Promise) {
  return knex.schema.createTable("movie_buds", buds => {
    buds.increments("user_id").primary();
    buds.text("firstName");
    buds.text("lastName");
    buds.text("email");
    buds.text("token");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("movie_buds");
};
