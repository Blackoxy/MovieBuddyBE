exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movie_titles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie_titles").insert([
        { user_id: 1, title: ["Jaws", "Zoolander"] },
        { user_id: 1, title: "Zoolander" },
        { user_id: 3, title: "Zoolander" },
        { user_id: 3, title: "Dumb and Dumber" },
        { user_id: 4, title: "The Royal Tenebaums" },
        { user_id: 1, title: "Jurassic Park" },
        { user_id: 2, title: "Jurassic Park" },
        { title: "Taxi Driver" },
        { title: "Talladega Nights" },
        { title: "Black Sheep" },
        { title: "Tommy Boy" },
        { title: "Swingers" }
      ]);
    });
};
