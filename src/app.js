import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config.js";
import invitadosRoutes from "./routes/invitados.routes.js";
import familiasRoutes from "./routes/familias.routes.js";
import entradasRoutes from "./routes/entradas.routes.js";
import platosFuertesRoutes from "./routes/platosFuertes.routes.js";
import confirmacionesRoutes from "./routes/confirmaciones.routes.js";
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
app.use("/api", entradasRoutes);
app.use("/api", platosFuertesRoutes);
app.use("/api", confirmacionesRoutes);
export default app;
