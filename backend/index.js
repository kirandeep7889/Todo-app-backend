const express = require("express");
const mongoose = require("mongoose");
const rootRoute = require("./routes/rootRoute");
const database_url="mongodb+srv://skirandeep999:Kirandeep7889@cluster0.hqrjaa0.mongodb.net/TODOS";
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(database_url)
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

app.use("/api/v1", rootRoute);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
