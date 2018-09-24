// Update with your config settings.

module.exports = {
  development: {
<<<<<<< HEAD
<<<<<<< HEAD
    client: "pg",
    connection: "postgresql://localhost/movie_buddy"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
=======
    client: 'pg',
    connection: 'postgresql://localhost/movie_buddy'
=======
    client: "pg",
    connection: "postgresql://localhost/movie_buddy"
>>>>>>> c95b93b2ac8439de2b2305eecd93b0c5ae1a48c2

  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
}
>>>>>>> 8bdcb581b768411e5370621adfad117694909465
