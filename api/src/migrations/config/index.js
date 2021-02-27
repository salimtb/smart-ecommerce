import Sequelize from 'sequelize';
import { config as loadEnv } from 'dotenv';

loadEnv();

const mysqlConfig = {
    dev: {
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USERNAME || '',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE_API || '',
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED,
        logging: process.env.MYSQL_LOGGING === 'true',
        dialect: 'mariadb',
        dialectOptions: {
            charset: 'utf8mb4',
        },
        pool: {
            max: 30,
            min: 5,
        },
    },

};

module.exports = mysqlConfig;
