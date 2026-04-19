const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Server
app.listen(PORT, () => {
  console.log(`🚀 Comva running at http://localhost:${PORT}`);
});
