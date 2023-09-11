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
} as Config;

interface Config {
    server: { [key: string]: string };
    database: {
        dev: { [key: string]: string };
        test: { [key: string]: string };
    };
}
