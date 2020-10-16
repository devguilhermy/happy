import express from "express";
import "./database/connection";

const app = express();

app.use(express.json());

app.post("/:id", (req, res) => {
    return res.json({
        query_params: req.query,
        route_params: req.params,
        body: req.body,
    });
});

app.listen(1234);
