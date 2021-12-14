const express = require("express");
const app = express();
const server = require("http").Server(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev }); // Check if the ap is on 'Production' or 'Develop' mode.
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./config.env" });
const connectDb = require("./utilsServer/connectDb");
const PORT = process.env.PORT || 3000;
app.use(express.json()); // this is the body parser
connectDb();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handle(req, res)); // This is for Server Side Rendering - SSR. Otherwise the pages in 'pages' folder will not work.

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Express server is runing on ${PORT}`);
  });
});
