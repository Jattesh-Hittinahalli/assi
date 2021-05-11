const express = require("express");
const {insertData,sumData,sortData} = require("../controller/assi");
// const {requiredsignin,verifyadmin} = require("../common-middleware/index");
const router = express.Router();

// router.post('/category/create',requiredsignin,verifyadmin, create_category);
router.post('/insertData',insertData);
router.get('/sumData',sumData);
router.get('/sortData',sortData);


module.exports = router;