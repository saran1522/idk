const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create the Express app
const app = express();
const routes=require("./controller");

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json()); // Parse JSON bodies

// Route Definitions
app.use("/",routes); 
// app.get('/', (req, res) => {
//     res.send("hello , its working!!!");
// });
app.listen(3000,(req,res)=>{
    console.log("Server listening on 3000..");
})