(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signupCtrl = this;

 console.log("In SignUpController");
 
  signupCtrl.submit = function () {
    signupCtrl.completed = true;
    signupCtrl.isValid = true;
    signupCtrl.isSaved = false;

  MenuService.getMatchedMenuItem(signupCtrl.user.favoriteDish)
      .then(function (foundItem){

      	signupCtrl.isValid = true;
        console.log("foundItem", foundItem);
        MenuService.saveUser(signupCtrl.user);        
        console.log("user", signupCtrl.user);
    	  signupCtrl.isSaved = true;

      })
      .catch(function (errorResponse){
        signupCtrl.isValid= false;
        console.log("No foundItem");
      });

  };
}

})();
