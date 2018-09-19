const express = require('express');
const router = require('express').Router();
const FooterController = require('../FooterPlayer/server/controller.js');
const HeroController = require('../HeroPlayer/server/controller.js');

router
  .route('/songs')
  .get(FooterController.fetch);

router
  .route('/heroPlayer')
  .get(HeroController.fetch);

module.exports = router;
