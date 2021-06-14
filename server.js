const express = require("express");
const cors = require("cors");

const formRoutes = require("./routes/formRoute");
const userRoutes = require("./routes/loginRoute");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

// initialise express
const app = express();
// create port
const port = process.env.PORT || 5000;
// configuration for basic rest
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/api/form", formRoutes);
app.use("/api/users", userRoutes);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// connect to the database
try {
  const connectionLink = process.env.DATABASE_URI;
  mongoose.connect(connectionLink, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const connect = mongoose.connection;
  connect.once("open", () => {
    console.log("database connected successfully");
  });
} catch (error) {
  throw new Error({ error });
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
