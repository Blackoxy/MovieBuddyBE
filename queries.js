const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'staging']
const knex = require('knex')(dbConnection)

function mBuddy() {
    return knex.select().from('movie_buds');
}
function indivStudent(id) {
    return knex.select().from('cohortTable').where('id', id);
}