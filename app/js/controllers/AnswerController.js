questApp.controller('AnswerController', 
    function AnswerController($scope){
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                // действия по сохранению
                alert(answer.author + ", ваш ответ сохранен");
            }
        };
})