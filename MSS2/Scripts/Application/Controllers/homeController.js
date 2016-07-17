app.controller('homeController', function ($scope, $window) {
    $scope.message = 'Home';

    angular.element(document).ready(function () {
        document.querySelector("#Twitter, #content, .twitter-timeline").style.height = document.querySelector("#Links").clientHeight;
        document.querySelector("#Facebook").style.maxWidth = $window.width - 6;
    });
});

app.controller('copyrightController', function ($scope) {

    $scope.currentYear = new Date().getFullYear();

});

