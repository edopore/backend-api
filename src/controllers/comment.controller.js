
let _commentService = null;

class CommentController{
    constructor(CommentService){
        _commentService = CommentService;
    }

    async get(req,res){
        const {commentId} = req.params;
        const idea = await _commentService.get(commentId);
        return res.send(idea);
    }

    async update(req, res){
        const {body} = req;
        const {commentId} = req.params;
        const updateIdea = await _commentService.update(commentId,body);
        return res.send(updateIdea);
    }

    async delete(req,res){
        const {commentId} = req.params;
        const deletedComment = await _commentService.delete(commentId);
        return res.send(deletedComment);
    }

    async getIdeasComment(req,res){
        const {ideaId} = req.params;
        const comments = await _commentService.getIdeasComment(ideaId);
        return res.send(comments);
    }

    async createComment(req,res){
        const {body} = req;
        const {ideaId} = req.params;
        const comment = await _commentService.createComment(body,ideaId);
        return res.status(201).send(comment);
    }

}


module.exports = CommentController