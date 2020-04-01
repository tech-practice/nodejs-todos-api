const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res, next) => {
  const result = db.getAll()
  res.json(result)
})
router.get('/:id', (req, res, next) => {
  const result = db.get(req.params.id)
  res.json(result)
})
router.post('/', (req, res, next) => {
  const result = db.insert(req.body)
  res.json(result)
})
router.patch('/:id', (req, res, next) => {
  const result = db.update(req.params.id, req.body)
  res.json(result)
})
router.delete('/:id', (req, res, next) => {
  const result = db.delete(req.params.id)
  res.json(result)
})

module.exports = router
