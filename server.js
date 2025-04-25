import express  from "express";
import Bootstartp from "./bootstrap.js";
import path from "path";
import { fileURLToPath } from "url";


const app=express();
app.use(express.json());
const fileName=fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);
app.use("/public/files", express.static(path.join(__dirname, 'public/files')));
Bootstartp(app);