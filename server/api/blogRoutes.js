const router = require('express').Router()
const { BlogPost } = require('../db/index')

router.get('/', async (req, res, next) => {
  try {
    const data = await BlogPost.findAll()
    res.status(200).send(data)
  } catch (err) {
    next(err)
  }
})

router.post('/addPost', async (req, res, next) => {
  try {
    BlogPost.create(req.body)
    res.status(201).send(req.body)
  } catch (err) {
    next(err)
  }
})

module.exports = router
