import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: '.env' });

// const configService = new ConfigService();
console.log(process.env.DB_PASSWORD);
export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: [`dist/**/*.entity{.ts,.js}`],
  migrations: [`migrations/*{.ts,.js}`],
});
