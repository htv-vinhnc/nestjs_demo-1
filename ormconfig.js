module.exports = {
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: 'Root8888',
  database: 'nestjs_project',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  type: 'postgres',
};