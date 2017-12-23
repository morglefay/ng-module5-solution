(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['savedData', 'ApiPath'];
function MyInfoController(savedData, ApiPath) {
  var $myinfoCtrl = this;
  
  console.log("in myinfoCtrl");
  $myinfoCtrl.savedData = savedData;
  $myinfoCtrl.basePath = ApiPath;
  console.log(savedData);

}

})();
