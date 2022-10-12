import { DataSource } from "typeorm"
import { configEnv } from "../../configs/dotenv"
import { User } from "../../modules/users/entities/User";
import { migrations } from "./migrations";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: configEnv.typeorm.dbUsername,
  password: configEnv.typeorm.dbPassword,
  database: configEnv.typeorm.dbName,
  logging: true,
  entities: [User],
  migrations
})

export async function createConnection(): Promise<void> {
  try {
    await AppDataSource.initialize();
    console.log("DB connected!");
  } catch (error) {
    console.log("Fail to connect to DB - Error", error);
  }
}