const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("testing!!");
});
router.post("/",(req,res)=>{
    const identity=req.body.name;
    res.send(identity);
})
module.exports = router;     