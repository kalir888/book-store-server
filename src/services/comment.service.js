import User from '../models/user.model';
import Comment from '../models/comment.model';
import Book from '../models/book.model';

export const addComment = async (bookId, userData) => {
    const user = await User.findOne({email: userData.userId});
    console.log(userData);
    console.log(user.fullName);
    const comment = {
        bookId: bookId,
        userName: user.fullName,
        stars: userData.stars,
        comment: userData.comment
    }
    const commentData = await Comment.create(comment);
    return commentData;
}

export const getAllComments = async (bookId) => {
    const commentData = await Comment.find({bookId: bookId});
    let totalRating = 0;
    await commentData.forEach(comment => totalRating = totalRating + comment.stars);
    let rating = totalRating/commentData.length;
    rating = rating.toFixed(1);
    await Book.findByIdAndUpdate(bookId,{rating: rating});
    if(commentData.length == 0) {
        throw Error('comments not found for the book');
    }
    return commentData;
}