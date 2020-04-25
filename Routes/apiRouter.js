const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
    res.status(200).json({})
});

module.exports = router;