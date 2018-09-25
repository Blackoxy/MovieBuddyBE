exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movie_buds")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie_buds").insert([
        //made up seed data
        { firstName: "Jose", lastName: "Rosay", userId: 100 },
        { firstName: "Brice", lastName: "Dracula", userId: 200 },
        { firstName: "Jed", lastName: "Jedi", userId: 300 },
        { firstName: "Awesome", lastName: "Anh", userId: 400 },
        { firstName: "Hunter", lastName: "Hunt", userId: 500 }
      ]);
    });
};
