const express = require("express")
const app = express();
require("dotenv").config();
var cors = require("cors");

app.use(cors({origin: "*",}));

const PORT = process.env.PORT || 3002;
app.use(express.json());

require("./config/database").connect();

const resData = require("./routes/resData");
app.use("/api/v1", resData)

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`)
})