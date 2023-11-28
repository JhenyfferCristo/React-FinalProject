import express, { json } from "express";
import sql from "mssql";
import cors from "cors";

const app = express();
const port = 5000;

const sqlConnection = {
  server: "localhost",
  user: "user",
  password: "user",
  database: "bowValleyRegistration",
  options: {
    trustServerCertificate: true,
  },
};

app.use(json());
app.use(cors());
