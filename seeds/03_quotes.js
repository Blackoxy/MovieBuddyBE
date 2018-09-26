exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movie_quotes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie_quotes").insert([
        {
          movie: "Dumb and Dumber",
          quote: "I desperately want to make love to a schoolboy."
        },
        {
          movie: "Shawshank Redemption",
          quote: "Hope is dangerous thing my friend, it can kill a man."
        },
        {
          movie: "Zoolander",
          quote: "What is this? A center for ants?"
        },
        {
          movie: "Tommy Boy",
          quote: "Does this suit make me look fat? No, your face does."
        },
        {
          movie: "Bravehart",
          quote: "Every man dies, but not every man really lives"
        },
        {
          movie: "Batman: The Dark Knight",
          quote: "Why so serious?"
        },
        {
          movie: "Ferris Bueller",
          quote:
            "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it."
        },
        {
          movie: "Dumb and Dumber",
          quote: "I desperately want to make love to a schoolboy"
        }
      ]);
    });
};
