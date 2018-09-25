
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('buddies_titles').del()
    .then(function () {
      // Inserts seed entries
      return knex('buddies_titles').insert([
        { titles_info: 1, buds_info: 1 },
        { titles_info: 1, buds_info: 2 },
        { titles_info: 1, buds_info: 3 },
        { titles_info: 2, buds_info: 4 },
        { titles_info: 3, buds_info: 5 },
        { titles_info: 4, buds_info: 6 },
        { titles_info: 5, buds_info: 6 },
        { titles_info: 6, buds_info: 6 }
      ]);
    });
};
