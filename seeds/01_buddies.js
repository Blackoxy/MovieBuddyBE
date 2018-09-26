exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movie_buds")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie_buds").insert([
        //made up seed data
        { firstName: "Jose", lastName: "Rosay", token: 100 },
        { firstName: "Brice", lastName: "Dracula", token: 200 },
        { firstName: "Jed", lastName: "Jedi", token: 300 },
        { firstName: "Awesome", lastName: "Anh", token: 400 },
        {
          firstName: "Hunter",
          lastName: "Hunt",
          email: "huntapplegate@gmail.com",
          token: 500
        },
        { firstName: "James", lastName: "Hunt", token: 600 }
      ]);
    });
};
