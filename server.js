const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/index");
require("dotenv").config();

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
