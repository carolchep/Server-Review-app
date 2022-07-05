import express from 'express'
import { createReview,getReview, getAllReviews } from '../controllers/reviewController.js'

const router = express.Router()

router.post('/create',createReview)
router.get('review/:id', getReview)
router.get('/reviews',getAllReviews)

export default router
