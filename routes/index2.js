const express = require('express');
const router = express.Router();

router.get('/index2', async (req, res) => {
    res.render('partials/index2');
});

module.exports = router;