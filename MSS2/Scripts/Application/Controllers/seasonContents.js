app.controller('seasonContentsController', function ($scope, $routeParams) {
    angular.element(document).ready(function () {
        document.querySelector("#content, #Conference").style.minHeight = document.querySelector("#SeasonLinks").clientHeight;
    });
});
