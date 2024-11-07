const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    // credentials: true // Cookie || JWT
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the Product API!");
});

app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
