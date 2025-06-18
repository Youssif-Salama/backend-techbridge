import express  from "express";
import Bootstartp from "./bootstrap.js";
import path from "path";
import { fileURLToPath } from "url";
import limiter from "./src/services/rateLimiter.services.js";

const app=express();
app.use(express.json());
app.use(limiter)
const fileName=fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);
app.use("/public/files", express.static(path.join(__dirname, 'public/files')));
Bootstartp(app);