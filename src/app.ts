import express from "express";
import configEnvVars from "./config/variables";
configEnvVars();

import connectDatabase from "./config/database";
import getRoutes from "./config/getRoutes";

const app = express();

getRoutes(app);
connectDatabase();

const PORT = process.env.PORT;
app.listen(PORT, ()=>console.log(`Server Started at port: ${PORT}`))