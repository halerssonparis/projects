import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.post("/process/:domain", (req, res) => {
    res.send(true);
});

const port = 3000;
app.listen(port, () =>
    console.log(`Server running at ${port}`)
);