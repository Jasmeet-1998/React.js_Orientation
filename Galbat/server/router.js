const express=require('express');
const router= express.Router();

router.get('/',(req,res)=>{
  res.send('server is good -_-');
});


module.exports=router;
