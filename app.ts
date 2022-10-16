
require("dotenv").config();
require("./model/db")
const express = require("express");
const app = express();
const PORT = process.env.PORT || process.env.DEV_PORT;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const Routes = require("./routes/")

Routes.getGroupedProductRoutes(app);

app.listen(PORT);