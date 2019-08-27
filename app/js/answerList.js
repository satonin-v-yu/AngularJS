questApp.directive("answerList", function () {
    return {
        link: function (scope, element, attrs) {
         
            var data = scope[attrs["answerList"] || attrs["source"]];
             
            if (angular.isArray(data.answers)) {
                var divElem = angular.element("<div>").addClass("answers");
                if (element[0].nodeName == "#comment") {
                    element.parent().append(divElem);
                } 
                else {
                    element.append(divElem);
                }
                for (var i = 0; i < data.answers.length; i++) {
                    var answerElem = angular.element('<div>').addClass("answer");
                    var voteElem = angular.element('<div>').addClass("vote");
                     
                    var voteUpElem = angular.element('<a>').addClass("vote-up");
                    voteElem.append(voteUpElem);
                    var rateElem = angular.element('<span>').addClass("rate").text(data.answers[i].rate);
                    voteElem.append(rateElem);
                    var voteDownElem = angular.element('<a>').addClass("vote-down");
                    voteElem.append(voteDownElem);
                    answerElem.append(voteElem);
                     
                    answerElem.append(angular.element('<b>').text(data.answers[i].text));
                    answerElem.append(angular.element('<p>').text(data.answers[i].author));
                    var iElem =angular.element('<i>').text(data.answers[i].date);
                    var dateElem = angular.element('<p>').append(iElem);
                    answerElem.append(dateElem);
                    divElem.append(answerElem);
                }
            }
        },
        restrict: "EACM"
    }
});