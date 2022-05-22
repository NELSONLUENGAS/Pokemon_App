const router  = require('express').Router();
const { Type } = require('../db');
const { getTypes } = require('../middleware/Type');


router.get('/types', async (req, res, next)=>{
    try{
        if(!await Type.count()){
            const types = await getTypes();
            res.send(types)
        }else{
            const data = await Type.findAll();
            res.send({msg: 'Types Database loaded successfuly!!', data: data})
        }
    }catch(err){
        next(err)
    }
})

module.exports = router;