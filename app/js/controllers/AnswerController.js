questApp.controller('AnswerController',
    function AnswerController($scope, $http, $location, $templateCache){

        $scope.answer = null; 

        $scope.$on('$routeChangeStart', function(event, next, current) {
            if (typeof(current) !== 'undefined'){
                $templateCache.remove(next.templateUrl);
                console.log(next);
                console.log(current);
            }
        });
        $scope.$on("$routeChangeSuccess", function () {
            var id = $routeParams["id"]
            if(id !== 'undefined'){
                
                $http({method:'GET', url:'getAnswer.php', params: {'id':id}})
                .then(function success(response) {
                    $scope.answer = response.data;
                });
            }
        });
        //$scope.response={};
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                 
                $http.post("postAnswer.php", answer)
                    .then(function success (/*response*/) {
                        //$scope.response = response.data;
                        $location.path("question");
                    });
            }
        };
    }
)