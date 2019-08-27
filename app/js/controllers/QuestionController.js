questApp.controller('QuestionController', 
    function QuestionController($scope, $http){
		
        $http({method: 'GET', url: 'question.json'})
			.then(function success(response) {
                $scope.question=response.data.question;
			});
		
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)