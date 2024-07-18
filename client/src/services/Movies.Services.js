// From Dependencies 
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8004',
})

// Post
function createReview(review) {
    return http.post('/review', review)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

// Get
function getAllReviews() {
    return http.get('/review')
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

function getAllReviewsByMovieId(id) {
    return http.get(`/review/movie/${id}`, id)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

function getOneReviewById(id) {
    return http.get(`/review/${id}`, id)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

// Put
function updateOneReviewById(review) {
    return http.put(`/review/${review._id}`, review)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

// Delete
function deleteOneReviewById(id) {
    return http.delete(`/review/${id}`, id)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

export {
    createReview,
    getAllReviews,
    getAllReviewsByMovieId,
    getOneReviewById,
    updateOneReviewById,
    deleteOneReviewById,
}