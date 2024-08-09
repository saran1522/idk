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
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email,password);
})
module.exports = router;     