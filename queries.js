const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'staging']
const knex = require('knex')(dbConnection)

module.exports = {
    selectAll() {
        return knex.select().from('movie_buds');
    },
    movieUser(id) {
        return knex.select().from('movie_buds').where('id', id);
    }
}


