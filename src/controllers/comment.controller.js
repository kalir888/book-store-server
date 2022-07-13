import HttpStatus from 'http-status-codes';
import * as CommentService from '../services/comment.service';

export const addComment = async (req, res, next) => {
    try {
      const data = await CommentService.addComment(req.params._id, req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Comment added for the book successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};

export const getAllComments = async (req, res, next) => {
    try {
      const data = await CommentService.getAllComments(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Comments fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};