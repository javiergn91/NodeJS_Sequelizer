const connection = require("./database");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/articles", require("./routes/article.routes"));

//Starting the server
app.listen(3000, () => {
    console.log("server on port 3000");
});
