import express from "express";
import bodyParser from "body-parser";

import serverRoutes from './routes/server.js';

const PORT = 6069;
const app = express();

//Allow all requests from all domains & localhost
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(serverRoutes)

app.listen(PORT);
