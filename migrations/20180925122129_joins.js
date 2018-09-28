
exports.up = function (knex, Promise) {

    return knex.schema.createTable('buddies_titles', buddy_titles => {
        buddy_titles.increments('id').primary()
        buddy_titles.integer('titles_info').unsigned()
        buddy_titles.foreign('titles_info').references('movie_titles.id')
        buddy_titles.integer('buds_info').unsigned()
        buddy_titles.foreign('buds_info').references('movie_buds.id')
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('buddies_titles')
};
