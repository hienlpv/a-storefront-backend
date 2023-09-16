const {
    PORT,
    NODE_ENV,
    POSTGRES_HOST_DEV,
    POSTGRES_HOST_TEST,
    POSTGRES_DATABASE_DEV,
    POSTGRES_USER_DEV,
    POSTGRES_PASSWORD_DEV,
    POSTGRES_DATABASE_TEST,
    POSTGRES_USER_TEST,
    POSTGRES_PASSWORD_TEST,
    PASSWORD_PEPPER,
    PASSWORD_SALT_ROUND,
    JWT_TOKEN_SECRET,
} = process.env;

export default {
    server: {
        port: PORT,
        env: NODE_ENV,
    },
    database: {
        dev: {
            host: POSTGRES_HOST_DEV,
            database: POSTGRES_DATABASE_DEV,
            user: POSTGRES_USER_DEV,
            password: POSTGRES_PASSWORD_DEV,
        },
        test: {
            host: POSTGRES_HOST_TEST,
            database: POSTGRES_DATABASE_TEST,
            user: POSTGRES_USER_TEST,
            password: POSTGRES_PASSWORD_TEST,
        },
    },
    password: {
        pepper: PASSWORD_PEPPER,
        saltRounds: PASSWORD_SALT_ROUND,
    },
    jwt: {
        secret: JWT_TOKEN_SECRET,
    },
};
