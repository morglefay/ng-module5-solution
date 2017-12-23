(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  // var savedUser;
  var savedData = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

    service.getMatchedMenuItem = function (short_name) {
    var response = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/" + short_name + ".json")
    });

    return response.then(function (response) {
      return response.data;
    });
  };

  service.saveUser = function (user) {
    var savedUser = user;
    savedData[0] = savedUser;
    savedUser.favMenuItem = null;

    service.getMatchedMenuItem(user.favoriteDish)
      .then(function (foundItem){
        // console.log("foundItem: ", foundItem);
        savedUser.favMenuItem = foundItem;
      });

    // console.log("savedUser:", savedUser)
    // console.log("savedUser.favMenuItem:", savedUser.favMenuItem)
    // console.log("savedData:", savedData)
  }



  service.getSavedData = function () {
    return savedData;
  }
}



})();
