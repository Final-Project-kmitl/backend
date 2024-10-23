import express, { Request, Response } from "express";
import "reflect-metadata";
import { Product } from "../Entities/product.entity";
import { AppDataSource } from "../index";

const testRoute = express.Router();

testRoute.get("/test", (req, res, next) => {
  res.json("TESTER");
  console.log("====================================");
  console.log("Response form flutter");
  console.log("====================================");
});

testRoute.get("/product", async (req, res, next) => {
  try {
    const productRes = AppDataSource.getRepository(Product);
    const productAll = await productRes.find();
    res.json(productAll);
    console.log(productRes);
  } catch (error) {
    res.json(error);
  }
});

testRoute.get("/product/:id", async (req, res) => {
  try {
    const productRes = AppDataSource.getRepository(Product);
    const productId = await productRes.findOneBy({
      id: parseInt(req.params.id),
    });
    res.json(productId);
  } catch (error) {
    console.log(error);
  }
});

export { testRoute };
