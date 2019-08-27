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
    function QuestionController($scope, dataService, $timeout){
      
     var promiseObj = $timeout(function(){
            return dataService.getData();
        }, 3000);
        /*
        На выходе у нас получается объект promiseObj, который мы затем можем использовать.
        Например, если нам надо остановить выполнение сервиса $timeout,
        то мы можем вызвать следующий метод: $timeout.cancel(promiseObj)
        */
       promiseObj.then(function(value) { $scope.question=value; });
         
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)