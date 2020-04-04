const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//Middle ware

app.use(express.json());
app.use(cors());

const bets = require("./routes/api/bets");
app.use("/api/bets", bets);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));