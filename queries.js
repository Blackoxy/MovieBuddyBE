const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

module.exports = {
    getAll() {
        return knex.select().from("movie_buds")
            .fullOuterJoin('buddies_titles', 'movie_buds.id', 'buddies_titles.buds_info')
            .fullOuterJoin('movie_titles', 'movie_titles.id', 'buddies_titles.titles_info')
    },
    getBuddyById(id) {
        return knex
            .select()
            .from("movie_buds")
            .where("id", id);
    },
    createBuddy(buddy) {
        return knex("movie_buds").insert(buddy, ["id", "firstName", "lastName", "userId"])

    },
    updateBuddy(id, body) {
        return knex.select().from("movie_buds").where("id", id).update(body).returning("*")
    },
    deleteBuddy(id) {
        return knex.select().from("movie_buds").where("id", id).del().returning("*")
    },
    getMoviesById() {
        // return knex.from("movie_buds").innerJoin("movie_titles", "movie_buds", "movie_titles.id")
        // knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id')
        return knex.select('*').from('movie_buds').leftOuterJoin('movie_titles', 'movie_buds.id', 'movie_titles.id')
    }
};
