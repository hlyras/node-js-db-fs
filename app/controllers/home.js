var homeController = {
  index: function(request, response, next) {
      response.render('index');
  }
};

module.exports = homeController;