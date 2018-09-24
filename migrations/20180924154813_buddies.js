exports.up = function(knex, Promise) {
  return knex.schema.createTable("movie_buds", buds => {
    buds.increments("id");
    buds.text("firstName");
    buds.text("lastName");
    buds.text("userId");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("movie_buds");
};
