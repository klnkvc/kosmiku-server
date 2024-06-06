const express = require("express");
const userRoutes = require("./routes/user");
const middlewareLogRequest = require("./middleware/logs");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json()); //mengizinkan request body berupa json

//middleware untuk melayani file statis
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}`);
});
