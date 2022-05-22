const router  = require('express').Router();
const PokemonRoute = require('./Pokemon');
const TypeRoute = require('./Type');
const AbilityRoute = require('./Ability');

/*-------------------------------------*/
/*-------------------------------------*/
router.use('/', PokemonRoute);
router.use('/', TypeRoute);
router.use('/', AbilityRoute);





module.exports = router;
