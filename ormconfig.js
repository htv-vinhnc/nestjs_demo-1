// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getSecret } = require('./dist/common/config/secretManager');

const getDbConfig = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_USER_PASSWORD,
      database: process.env.DB_NAME,
    };
  }
  return await getSecret('DB_CONFIG');
};

const setOrmConfig = async () => {
  const secret = await getDbConfig();

  return [
    {
      ...secret,
      name: 'default',
      type: 'mysql',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: ['dist/database/migration/*.js'],
      cli: { migrationsDir: 'src/database/migration' },
    },
    {
      ...secret,
      name: 'seed',
      type: 'mysql',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrationsTableName: 'seeds',
      migrations: ['dist/database/seed/*.js'],
    },
  ];
};

module.exports = setOrmConfig();
