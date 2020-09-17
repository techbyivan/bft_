const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.status(200).send("hello world")
})

app.listen(3000, () => console.log("listening on http://localhost:3000"))

