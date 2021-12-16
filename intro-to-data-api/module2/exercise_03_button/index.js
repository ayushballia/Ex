const express = require("express");
const app = express();
app.listen(3000, () => console.log("Listening at post 3000"));
app.use(express.static("public"));
