/* response.
data: представляет данные, полученные от сервера
status: статусный код ответа
headers: возвращает функцию, получающую заголовки ответа
config: объект для конфигурации запроса
statusText: текст статуса ответа

$http.
get(url, config): выполняет GET-запрос по определенному url
post(url, data, config): выполняет POST-запрос к определенному url с отправкой объекта data
delete(url, config): выполняет DELETE-запрос
put(url, data, config): выполняет PUT-запрос, отправляя объект data по определенному url
head(url, config): выполняет HEAD-запрос
jsonp(url, config): выполняет JSONP-запрос по определенному url
 */
questApp.controller('QuestionController',
    function QuestionController($scope, $http){
      
        $scope.loaded=false;
      
        $scope.load = function (){
            // $http({
                // method: 'GET',
                // url: 'question.json'
            // })
            $http.get('question.json')
            .then(function successCallback(response) {
                    $scope.question = response.data.question;
                    $scope.loaded = true;
                    console.log("код ответа: " + response.status);
                    console.log("объем данных: " + response.headers("content-length"));
                }, function errorCallback(response) {
                    console.log("Возникла ошибка");
                    console.log("код ответа: " + response.status);
                });
        };
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)