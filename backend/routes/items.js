const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=> res.json({text: 'its working!'}))

module.exports = router;