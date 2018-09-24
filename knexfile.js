// Update with your config settings.

module.exports = {
  development: {
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

  },

  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL'
  }
}
>>>>>>> 8bdcb581b768411e5370621adfad117694909465
