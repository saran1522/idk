const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create the Express app
const app = express();
const routes=require("./controller");

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
    }));
app.use(bodyParser.json()); // Parse JSON bodies

// Route Definitions
app.use("/",routes); 
app.use("/signup", routes);
app.listen(3000,(req,res)=>{
    console.log("Server listening on 3000..");
})