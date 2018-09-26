
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_titles').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_titles').insert([
        { title: 'Jaws', user_id: '100'},
        { title: 'Zoolander', user_id: '100' },
        { title: 'Dumb and Dumber', user_id: '200' },
        { title: 'The Royal Tenebaums', user_id: '300' },
        { title: 'Jurassic Park', user_id: '200' },
        { title: 'Taxi Driver', user_id: '400' },
        { title: 'Talladega Nights', user_id: '500' },
        { title: 'Black Sheep', user_id: '500' },
        { title: 'Tommy Boy', user_id: '600' },
        { title: 'Swingers', user_id: '600' }
      ]);
    });
};
