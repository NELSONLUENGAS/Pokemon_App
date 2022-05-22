const router = require('express').Router();
const { Ability } = require('../db');
const { getAbilities } = require('../middleware/Ability');


router.get('/abilities', async (req, res, next)=>{
    try{
        if(!await Ability.count()){
            const abilities = await getAbilities();
            res.send(abilities)
        }else{
            const data = await Ability.findAll();
            res.send({msg: 'Abilities Database loaded successfuly!!', data: data})
        }
    }catch(err){
        next(err)
    }
})
module.exports = router;