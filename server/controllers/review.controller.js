// From Other Files 
import ReviewModel from '../models/review.model.js';

    // Post Functions
    async function createReview(req, res) {
        try {
            const newReview = await ReviewModel.create(req.body)
            res.status(200).json(newReview)
        } catch (error) {
            res.status(400).json(error)
        }
    }
   
    // Get Functions
    async function getAllReviews(req, res) {
        try {
            const allReviews = await ReviewModel.find()
            res.status(200).json(allReviews)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async function getAllReviewsByMovieId(req, res) {
        try {
            const allReviews = await ReviewModel.find({ movie_id: req.params.id })
            res.status(200).json(allReviews)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async function getOneReviewById(req, res) {
        try {
            const foundReview = await ReviewModel.findById(req.params.id)
            res.status(200).json(foundReview)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    // Put Functions
    async function updateOneReviewById(req, res) {
        const { id } = req.params
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updatedReview = await ReviewModel.findByIdAndUpdate(id, req.body, options)
            res.status(200).json(updatedReview)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    // Delete Functions
    async function deleteOneReviewById(req, res) {
        try {
            const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id)
            res.status(200).json(deletedReview)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    export {
        createReview,
        getAllReviews,
        getAllReviewsByMovieId,
        getOneReviewById,
        updateOneReviewById,
        deleteOneReviewById,
    }