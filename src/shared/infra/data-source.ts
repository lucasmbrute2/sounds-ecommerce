import { DataSource } from "typeorm"
import { configEnv } from "../../configs/dotenv"
import { CartItem } from "../../entities/CartItem";
import { Discount } from "../../entities/Discount";
import { OrderDetails } from "../../entities/OrderDetails";
import { OrderItems } from "../../entities/OrderItems";
import { PaymentDetails } from "../../entities/PaymentDetailts";
import { Product } from "../../entities/Product";
import { ProductCategory } from "../../entities/ProductCategory";
import { ProductInventory } from "../../entities/ProductInventory";
import { ShoppingSession } from "../../entities/ShoppingSession";
import { User } from "../../entities/User";
import { UserAddress } from "../../entities/UserAddress";
import { UserPayment } from "../../entities/UserPayment";
import { default1668235314977 } from "./migrations/1668235314977-default";
import { default1668279260283 } from "./migrations/1668279260283-default";
import { default1668280702915 } from "./migrations/1668280702915-default";
import { default1668455431307 } from "./migrations/1668455431307-default";
import { default1668457715670 } from "./migrations/1668457715670-default";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: configEnv.node.env === 'localhost' ? '127.0.0.1' : configEnv.typeorm.dbHost,
  port: 5432,
  username: configEnv.typeorm.dbUsername,
  password: configEnv.typeorm.dbPassword,
  database: configEnv.typeorm.dbName,
  logging: true,
  entities: [
    User, 
    UserAddress, 
    UserPayment, 
    ShoppingSession, 
    CartItem, 
    Product, 
    ProductCategory, 
    ProductInventory, 
    Discount, 
    OrderDetails, 
    OrderDetails, 
    OrderItems,
    PaymentDetails
  ],
  migrations: [default1668235314977, default1668279260283, default1668280702915, default1668455431307, default1668457715670]
})

export async function createConnection(): Promise<void> {
  try {
    await AppDataSource.initialize();
    console.log("DB connected!");
  } catch (error) {
    console.log("Fail to connect to DB - Error", error);
  }
}