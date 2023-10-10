import "dotenv/config";
import app from "./src/app.js";
//const bcrypt = require("bcrypt");
//const jwt = require("jwt");



const PORT = 3000;

app.listen(PORT, () => {

    console.log("servidor escutando!");
});