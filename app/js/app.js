/*
$route.
current: возвращает объект, который содержит информацию о текущем маршруте
reload(): перезагружает представление для текущего маршрута
routes: возвращает коллекцию маршрутов, определенных через $routeProvider

    мы можем обрабатывать события, определенные в сервисе $route:
$routeChangeStart: событие срабатывает перед изменением маршрута
$routeChangeSuccess: событие срабатывает после изменения маршрута
$routeUpdate: событие срабатывает при обновлении маршрута
$routeChangeError: срабатывает, если маршрут не может быть изменен
*/
var questApp = angular.module('questApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/question',
        {
            templateUrl:'views/question.html',
            controller:'QuestionController'
        });
        $routeProvider.when('/answer',
        {
            templateUrl:'views/answer.html',
            controller:'AnswerController'
        });
        $routeProvider.otherwise({redirectTo: '/question'});

}).run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
}); 