const router = require('express').Router();
const {

} = require('../controllers/userControllers')

// GET all users
router.get('/', (req, res) =>{
    res.send('Get all users')
})

module.exports = router;