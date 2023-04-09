const BaseRepository = require("./base.repository")
let _idea = null

class IdeaRepository extends BaseRepository{
    constructor({Idea}){
        super(Idea);
        _idea = Idea;
    }
    async getUserIdea(author){
        return await _user.find({author});
    }
}

module.exports = IdeaRepository;
