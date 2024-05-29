const express = require("express");
const userRoutes = require("./routes/user");
const middlewareLogRequest = require("./middleware/logs");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json()); //mengizinkan request body berupa json
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}`);
});
