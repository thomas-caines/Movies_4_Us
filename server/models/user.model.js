import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
    {
        first_Name: {
            type: String,
            required: [true, 'You must provide a first name'],
            minlength: [2, 'Name must be at least 2 characters'],
            maxlength: [255, 'Name cannot be more than 255 characters']
        },
        last_Name: {
            type: String,
            required: [true, 'You must provide a first name'],
            minlength: [2, 'Name must be at least 2 characters'],
            maxlength: [255, 'Name cannot be more than 255 characters']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        }

    }
)