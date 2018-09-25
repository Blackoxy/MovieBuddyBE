
exports.up = function (knex, Promise) {
    return knex.schema.createTable("movie_titles", titles => {
        titles.increments("id");
        titles.text("title");
    });

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("movie_titles");

};
