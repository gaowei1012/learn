"use strict";

var router = require('koa-router')();

var Controller = require('../controller/learn');

router.post('/api/learn/addVocabulary', Controller.addVocabulary);
router.get('/api/learn/getVocabulary', Controller.getVocabulary);
router.post('/api/learn/updateVocabulary', Controller.updateVocabulary);
module.exports = router;