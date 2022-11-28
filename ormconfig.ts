import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const DBconfig: TypeOrmModuleOptions  = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: [
    'src/database/migrations/*{.ts,.js}',
    'dist/database/migrations/*{.ts,.js}'
  ],
  migrationsTableName: 'custom_migration_table',
  migrationsRun: true,
};
