const express = require('express');
const router = express.Router();

router.get('/users',(req,res,next) => {
    console.log('in the middleware');
    res.send('<form action="/admin/users" method="post"><input type="text" name="name"/></form>')
});
router.post('/users', (req,res) => {
    const body = req.body;
    res.send(body);
})


module.exports = router;