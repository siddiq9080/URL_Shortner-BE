import express from "express";
import { dbConnection } from "./DB-connection/mongoose-db.js";
import { userserver } from "./registerapi.js";
import { urlserver } from "./url.js";
import cors from "cors";

let server = express();

server.use(express.json());
server.use(cors());

const port = 4600;

server.use("/", userserver);
server.use("/", urlserver);

await dbConnection();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
