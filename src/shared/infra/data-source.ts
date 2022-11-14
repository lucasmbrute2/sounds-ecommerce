import { DataSource } from "typeorm"
import { configEnv } from "../../configs/dotenv"
import { CartItem } from "../../modules/users/entities/CartItem";
import { Product } from "../../modules/users/entities/Product";
import { ProductCategory } from "../../modules/users/entities/ProductCategory";
import { ProductInventory } from "../../modules/users/entities/ProductInventory";
import { ShoppingSession } from "../../modules/users/entities/ShoppingSession";
import { User } from "../../modules/users/entities/User";
import { UserAddress } from "../../modules/users/entities/UserAddress";
import { UserPayment } from "../../modules/users/entities/UserPayment";
import { default1668235314977 } from "./migrations/1668235314977-default";
import { default1668279260283 } from "./migrations/1668279260283-default";
import { default1668280702915 } from "./migrations/1668280702915-default";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: configEnv.node.env === 'localhost' ? '127.0.0.1' : configEnv.typeorm.dbHost,
  port: 5432,
  username: configEnv.typeorm.dbUsername,
  password: configEnv.typeorm.dbPassword,
  database: configEnv.typeorm.dbName,
  logging: true,
  entities: [User, UserAddress, UserPayment, ShoppingSession, CartItem, Product, ProductCategory, ProductInventory],
  migrations: [default1668235314977, default1668279260283, default1668280702915]
})

export async function createConnection(): Promise<void> {
  try {
    await AppDataSource.initialize();
    console.log("DB connected!");
  } catch (error) {
    console.log("Fail to connect to DB - Error", error);
  }
}