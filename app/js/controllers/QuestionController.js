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

config.
data: данные, которые посылаются на сервер.
    Если не установить данный параметр,то отправляемые данные,
    например, методом post, будут автоматически сериализоваться в json
headers: объект, представляющий набор заголовков
method: HTTP-метод запроса
params: устанавливает параметры строки URL
timeout: устанавливает число миллисекунд действия запроса
transformRequest: функция, которая обрабоатывает данные запроса перед его осуществлением
transformResponse: функция, которая обрабатывает ответ от сервера
    после осуществления запроса
url: устанавливает запрашиваемый URL
withCredentials: если параметр равен true, то в запросе также отправляются
    аутентификационные куки
xsrfHeaderNamexsrfCookieName: используется для отправки CSRF-токенов
 */
questApp.controller('QuestionController',
    function QuestionController($scope, $http){
      
        $scope.loaded=false;
      
        $scope.load = function (){
            var conf = {
                timeout: 600 // 600 миллисекунд
            };
            // $http({
                // method: 'GET',
                // url: 'question.json'
            // })
            $http.get('question.json', conf)
            .then(function successCallback(response) {
                    $scope.question = response.data.question;
                    $scope.loaded = true;
                    console.log("код ответа: " + response.status);
                    console.log("объем данных: " + response.headers("content-length"));
                    console.log(response.config);
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