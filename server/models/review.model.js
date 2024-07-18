// From Dependencies
import { model, Schema } from 'mongoose'

const ReviewSchema = new Schema(
    {
        rating: {
            type: Number,
            required: [true, 'You must rate the movie'],
            min: [1, 'Rating must be at least 1'],
            max: [10, 'Rating cannot be more than 10']
        },
        review_body: {
            type: String,
            required: [true, 'You must leave your thoughts'],
            minlength: [5, 'Thoughts must be at least 5 character long '],
            maxlength: [255, 'Thoughts cannot be more than 255 characters long']
        },
        recommend: {
            type: Boolean
        },
        movie_id: {
            type: String
        }
    },
    { timestamps: true }
)

const ReviewModel = model('ReviewModel', ReviewSchema)
export default ReviewModel