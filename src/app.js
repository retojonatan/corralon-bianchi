const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const exphbs = require("express-handlebars");
const config = require("./config");
const path = require("path");
const authRoutes = require("./routes/auth.routes");
const appRoutes = require("./routes/app.routes");

const app = express();

app.set("PORT", config.PORT || 3000);
app.set("secret", config.SK);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partials: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api", authRoutes);
app.use("/api", appRoutes);
app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
