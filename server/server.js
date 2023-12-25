const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
var cors = require("cors");
const connectionDB = require("./config/dbConnection");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const courseDetailRoute = require("./routes/courseDetailRoute");
const app = express();

app.use(cors());

app.use(express.json());

dotenv.config({ path: "./server/config.env" });

const PORT = process.env.PORT || 8000;

connectionDB();

// Routes
app.use("/api/course", courseRoute);
app.use("/api/category", categoryRoute);
app.use("/api/courseDetail", courseDetailRoute);

const dirname = path.resolve();
app.use("/public", express.static(path.join(dirname, "/public")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
