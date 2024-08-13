const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("testing!!");
});
router.post("/",(req,res)=>{
    const identity=req.body.name;
    res.send(identity);
})
router.post("/signup",(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    res.status(200).json({message:"Signup Successful!"})
})
module.exports = router;     