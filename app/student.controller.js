angular
.module("ngtest")
.controller("StudentsController",StudentsController);

function StudentsController($scope){
    
    var students = [{
        name:"mstr x ",
        age:"10",
        detail:"mstr x  losejfkldsa dsklfj dskdsjfkldsj dskjkflj ds  ALI "
    },{
        name:"ali",
        age:"15",
        detail:"ALI losejfkldsa dsklfj dskdsjfkldsj dskjkflj ds  ALI "
    },{
        name:"Salem",
        age:"10",
        detail:"Salem losejfkldsa dsklfj dskdsjfkldsj dskjkflj ds  ALI "
    },{
        name:"mstas ",
        age:"19",
        detail:"mstas losejfkldsa dsklfj dskdsjfkldsj dskjkflj ds  ALI "
    },{
        name:"gazi",
        age:"10",
        detail:"gazi losejfkldsa dsklfj dskdsjfkldsj dskjkflj ds  ALI "
    },{
        name:"jemes",
        age:"20",
        detail:"jemes losejfkldsa dsklfj dskdsjfkldsj dskjkflj ds  ALI "
    }];
    
    $scope.studentsList = students;
    this.ctrlStudents = students;
    
    $scope.clickHandler = function clickHandler(student){
        $scope.selectedStudent =  angular.copy(student);       
    }
    
}
