import express from "express";

const client_router = express.Router();

client_router.post("/create_client", (req, res, next) => {
  try {
    res.send("Hello");
  } catch (error) {}
});

export { client_router };
