const express = require('express');
const router = express.Router();
//@route Get api/posts
//@desc Test Route
//@access public
router.get('/', (req, res)=> res.send('posts Route'));

module.exports = router;