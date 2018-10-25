var homeController = {
  index: function(request, response, next) {
      'use strict'
      response.render('pages/home');
  },
  about: function(request, response, next) {
  		'use strict'
  		var info = {
  			name: "Wi-Cooperation",
  			CEO: "Henrique Lyra",
  			year: "2018"
  		}
  		response.render('pages/about', {
  			about: info
  		});
  }
};

module.exports = homeController;