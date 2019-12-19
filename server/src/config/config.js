module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'fittracker',
        user: process.env.DB_USER || 'fittracker',
        password: process.env.DB_PASS || 'fittracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './fittracker.sqlite'
        }
    }
}