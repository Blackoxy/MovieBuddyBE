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
    },
    createBuddy(buddy) {
        return knex("movie_buds").insert(buddy, ["id", "firstName", "lastName", "userId"])

    },
    updateBuddy(id, body) {
        return knex.select().from("movie_buds").where("id", id).update(body).returning("*")
    },
    deleteBuddy(id) {
        return knex.select().from("movie_buds").where("id", id).del().returning("*")
    }
};
