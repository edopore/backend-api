const {createContainer,asClass,asValue,asFunction} = require('awilix');
//config
const config = require("../config");
const app = require(".")
//Services
const {HomeService,CommentService,IdeaService,UserService} = require('../services');
//Controllers
const {HomeController} = require('../controllers');
//Routes
const {HomeRoutes} = require("../routes/index.routes");
//Models
const {user,comment,idea} = require("../models")
//Repositories
const {CommentRepository,IdeaRepository,UserRepository} = require("../repositories");

const Routes = require("../routes")

const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    UserService: asClass(UserService).singleton(),

}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(user),
    Idea: asValue(idea),
    Comment: asValue(comment)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
});

module.exports = container;
