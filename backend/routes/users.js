var express = require('express');
var router = express.Router();
var models = require('../models/index.js');
var { Response, checkEmail } = require('../helpers/utils.js');

router.get('/', async function (req, res, next) {
  try {
    const getUser = await models.Data.findAll({
      order: [
        ["id", "ASC"]
      ]
    });
    res.status(200).json(new Response(getUser));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

router.post('/', async function (req, res, next) {
  try {
    const { firstName, lastName, email } = req.body;

    const checkEmailValid = checkEmail(email);
    if (!checkEmailValid) return res.status(401).json(new Response('Email must contain @gmail.com', false));

    const [user, created] = await models.Data.findOrCreate({
      where: { email },
      defaults: { firstName, lastName }
    });
    console.log('di sini 2');
    if (!created) return res.status(401).json(new Response("Email already exists", false));
    console.log('disini 3');
    res.status(201).json(new Response(user));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    const updateUser = await models.Data.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    });
    res.status(201).json(new Response(updateUser[1]));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    const deleteUser = await models.Data.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(new Response(deleteUser));
  } catch (error) {
    console.log(error);
    res.status(500).json(new Response(error, false));
  }
});

module.exports = router;
