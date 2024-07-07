// From Dependencies 
import { Router } from 'express';
// From Other Files
import {
    createReview,
    getAllReviews,
    getOneReviewById,
    updateOneReviewById,
    deleteOneReviewById,
} from '../controllers/review.controller.js';

const reviewRouter = Router()
    // No Id Routes
    reviewRouter.route('/')
        .post( createReview )
        .get( getAllReviews )

    // Id Routes
    reviewRouter.route('/:id')
        .get( getOneReviewById )
        .put( updateOneReviewById )
        .delete( deleteOneReviewById )

export default reviewRouter