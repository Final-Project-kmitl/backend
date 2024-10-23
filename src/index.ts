import { DataSource } from "typeorm";
import dotenv from "dotenv";
import express from "express";
import { testRoute } from "./routes/test_route";
import { Product } from "./Entities/product.entity";
import "reflect-metadata";

dotenv.config();
const app = express();

export const AppDataSource = new DataSource({
  name: "mydb",
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Product], // Add your entity files here
});

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to MySQL");

    app.use(express.json());

    app.use("/api", testRoute);

    app.listen(process.env.PORT, () => {
      console.log(`listen on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};

main();
