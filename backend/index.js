import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
/* to make cross origin resource requests, to make api calls from another server */
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.connect( process.env.MONGO_URL, {
    useNewUrlparser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen( PORT, () => {
        console.log(`Server running on: http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log(`${error} did not connect`);
})


