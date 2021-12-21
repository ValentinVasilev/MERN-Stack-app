const express = require("express");
const app = express();
const server = require("http").Server(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production"; // Check if the ap is on 'Production' or 'Develop' mode.
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./config.env" });
const connectDb = require("./utilsServer/connectDb");
connectDb();
app.use(express.json());
const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  app.use("/api/signup", require("./api/signup"));
  app.use("/api/auth", require("./api/auth"));
  app.use("/api/search", require("./api/search"));
  app.use("/api/posts", require("./api/posts"));

  app.all("*", (req, res) => handle(req, res)); // This is for Server Side Rendering - SSR. Otherwise the pages in 'pages' folder will not work.

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Express server running");
  });
});
