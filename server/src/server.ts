import express from "express";

const app = express();

app.use(express.json());

app.get("/:id", (req, res) => {
    return res.json({
        query: req.query,
        route: req.params,
        body: req.body,
    });
});

app.post("/", (req, res) => {
    return res.json(req.body);
});

app.put("/", (req, res) => {
    return res.json(req.body);
});

app.patch("/", (req, res) => {
    return res.json(req.body);
});

app.listen(1234);
