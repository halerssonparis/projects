import express from "express";
import bodyParser from "body-parser";
import router from "./routes/domainRoute";

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/process", router);

app.listen(port, () =>
    console.log(`Server running at ${port}`)
);