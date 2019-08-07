// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.sqlite3'
    }
  },
  migrations: {
    directory: './data/migrations',
    tableName: 'dbmigrations',
  },
  seeds: { directory: './data/seeds' },
}
