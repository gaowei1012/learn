const config = {
    port: 7076,
    host: '127.0.0.1',
    database: {
        DATABASE: 'learn',
        USERNAME: 'root',
        PASSWORD: 'gao129231wei',
        PORT: '3306',
        HOST: '127.0.0.1'
    },
    token: {
        tokenExpiresTime: 1000 * 60 * 60 * 24 * 7,
        jwtSecret: 'jwtSecret',
    }
}

module.exports = config