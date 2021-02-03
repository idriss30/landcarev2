const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/formRoute");
const userRoutes = require("./routes/loginRoute");
const mongoose = require("mongoose");

require("dotenv").config();

// initialise express
const app = express();
// create port
const port = process.env.PORT || 6000;
// configuration for basic rest
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/form", formRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.json({ message: "nothing to see here" });
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
