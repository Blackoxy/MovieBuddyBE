exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movie_buds")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie_buds").insert([
        //made up seed data
        { firstName: Jose, lastName: Rosay, userId: 1 },
        { firstName: Brice, lastName: Dracula, userId: 2 },
        { firstName: Jed, lastName: Jedi, userId: 3 },
        { firstName: Anh, lastName: Pan, userId: 4 },
        { firstName: Hunter, lastName: Hunt, userId: 5 }
      ]);
    });
};
