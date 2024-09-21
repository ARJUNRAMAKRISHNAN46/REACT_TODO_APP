const express = require("express");
const router = require("./routes/route");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
// const csurf = require("csurf");
const morgan = require("morgan");
const helmet = require("helmet");
const connectToDatabase = require("./config/dbConnection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// const csrfProtection = csurf({
//   cookie: true,
// });

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes.",
  headers: true,
});

// app.use(csrfProtection);

connectToDatabase();
app.use(limiter);
app.use(helmet());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`server starts in http://localhost:${PORT}`);
});
