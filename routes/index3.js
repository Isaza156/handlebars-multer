const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/form', async (req, res) => {
    res.render('partials/index3');
});

router.post('/profile', upload.single('avatar'), function (req, res, next) {
    req.file.body;
    res.send(req.file);
    next();
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

module.exports = router;