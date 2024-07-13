// From Dependencies 
import { Router } from 'express';
// From Other Files
import {
    createReview,
    getAllReviews,
    getAllReviewsByMovieId,
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

    reviewRouter.route('/movie/:id')
        .get( getAllReviewsByMovieId )

export default reviewRouter