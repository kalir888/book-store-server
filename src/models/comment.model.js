import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
    {
        bookId: {
            type: String
        },
        userName: {
            type: String
        },
        stars: {
            type: Number
        },
        comment: {
            type: String
        }
    }
)

export default model('Comment', commentSchema);