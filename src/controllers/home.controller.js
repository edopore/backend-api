let _homeService = null;

class HomeController{
    constructor({HomeService}){
        _homeService = HomeService;
    }

    index(request,response){
        return response.send(_homeService.index());
    }
}

module.exports = HomeController
