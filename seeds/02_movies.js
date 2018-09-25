
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_titles').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_titles').insert([
        { title: 'Jaws' },
        { title: 'Zoolander' },
        { title: 'Dumb and Dumber' },
        { title: 'The Royal Tenebaums' },
        { title: 'Jurassic Park' },
        { title: 'Taxi Driver' },
        { title: 'Talladega Nights' },
        { title: 'Black Sheep' },
        { title: 'Tommy Boy' },
        { title: 'Swingers' }
      ]);
    });
};
