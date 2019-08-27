questApp.directive("answerList", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["answerList"]];
        },
        restrict: "A",
		//templateUrl: "templates/answersTemplate.html",
		transclude: true,
		/*
        template: "<div class='answers'>" +
		//"<div ng-transclude></div>" +
        "<div ng-repeat='answer in data.answers' class='answer'>" +
            "<div class='vote'>" +
            "<a class='vote-up' ng-click='voteUp(answer)'></a>" +
            "<span class='rate'>{{answer.rate}}</span>" +
            "<a class='vote-down' ng-click='voteDown(answer)'></a>" +
        "</div>" +
        "<b>{{answer.text | formatText}}</b>" +
        "<p>{{answer.author}}</p>" +
        "<p><i>{{answer.date}}</i></p>" +
		"</div></div>"
		*/
    }
});