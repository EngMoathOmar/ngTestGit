angular
.module("ngtest",["ui.router"]);

angular
.module("ngtest")
  .config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/home");
	  //
	  // Now set up the states
	 $stateProvider
    .state('home', {
        url:"/home",
         templateUrl: 'ngtestgit/partials/home.html'
    })
     .state('students', {
         url:"/students/myownstudetnts/mstrx/yyy/students",
         templateUrl: 'ngtestgit/partials/students.html',
         controller:"StudentsController",
         controllerAs : "StudentsCtrl"
    })
}).run(function($state){
   // $state.go("home");
    
    
});