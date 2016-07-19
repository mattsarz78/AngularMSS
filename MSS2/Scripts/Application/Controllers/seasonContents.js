app.controller('seasonContentsController', function ($scope, $stateParams) {

    $scope.isFootball = false;
    if ($stateParams.sportYear.indexOf('football') > -1) {
        $scope.isFootball = true;
    }

    angular.element(document).ready(function () {
        document.querySelector("#content, #Conference").style.minHeight = document.querySelector("#SeasonLinks").clientHeight;
    });
});


//app.directive('yearList', ['$compile',
//    function ($compile) {
//        var getTemplate = function(content){
//            return 'Partials/YearLists/YearLists1.html';
//        }
//        return {
//            restrict: 'E',
//            replace: true,
//            link: function (scope, element, attrs) {
//                element.html(getTemplate(attrs.content));
//                $compile(element.contents())(scope);
//            }
//        }
//    }]);


//app.directive('yearList', [
//    function () {
//        return {
//            restrict: 'E',
//            template: '<ng-include src="getTemplateUrl()" />',
//            controller: function ($scope) {
//                $scope.getTemplateUrl = function () {
//                    if ($scope.isFootball) {
//                        return "Partials/YearLists/YearLists1.html";
//                    }
//                    return '';
//                }
//            }
//        }
//    }
//]);
