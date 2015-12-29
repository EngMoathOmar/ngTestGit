angular
.module("ngtest",["ui.router"]);

angular
.module("ngtest")
  .config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/students");
	  //
	  // Now set up the states
	 $stateProvider
     .state('students', {
         url:"/students",
         templateUrl: 'ngtestgit/partials/students.html',
         controller:"StudentsController",
         controllerAs : "StudentsCtrl"
    })
}).run(function($state){
   // $state.go("home");
    
    
});