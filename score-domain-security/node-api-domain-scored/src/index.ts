import express from "express";
import bodyParser from "body-parser";
import connection from "./database";

connection();

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.listen(port, () =>
    console.log(`Server running at ${port}`)
);