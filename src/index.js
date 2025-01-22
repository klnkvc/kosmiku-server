const express = require("express");
const session = require("express-session");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/authRoutes.js");
const middlewareLogRequest = require("./middleware/logs");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(cors({ origin: process.env.APP_URL, credentials: true }));
app.use(middlewareLogRequest);
app.use(express.json()); //mengizinkan request body berupa json
app.use(
  session({
    secret: process.env.SECRETKEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 60 * 1000, // 1 minute
    },
  })
);
//middleware untuk melayani file statis
app.use("/api/v1/public", express.static(path.join(__dirname, "public")));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}`);
});
