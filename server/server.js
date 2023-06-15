import express, { application } from "express";
import cors from "cors";
import router from "./routers/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
