import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config.js";
import invitadosRoutes from "./routes/invitados.routes.js";
import familiasRoutes from "./routes/familias.routes.js";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", invitadosRoutes);
app.use("/api", familiasRoutes);

export default app;
