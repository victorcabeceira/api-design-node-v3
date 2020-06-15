import { Router } from 'express'

const mockController = (req, res) => {
  res.send({ message: 'item' })
}

const router = Router()

// /api/item
router
  .route('/')
  .get(mockController)
  .post(mockController)

router
  .route('/:id')
  .get(mockController)
  .put(mockController)
  .delete(mockController)

export default router
