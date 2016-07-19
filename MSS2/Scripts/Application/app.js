var app = angular.module('mattSarzSports', ['ui.router', 'ngLoadScript', 'cssLoader', 'ui.router.title']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("/", { url: "/", templateUrl: "partials/home.html", controller: "homeController", title: "MattSarzSports.com", css: "css/home.css" });
    $stateProvider.state("/Season/Contents/", { url:"/Season/Contents/:sportYear", templateUrl: "partials/seasonContents.html", controller: "seasonContentsController", css: "css/seasonContents.css"});
    $stateProvider.state("/Schedule/Weekly/", { url: "/Schedule/Weekly/:sportYear/:week", templateUrl: "partials/weeklySchedule.html", controller: "scheduleWeeklyController" });
    $stateProvider.state("/Schedule/WeeklyText/", { url: "/Schedule/WeeklyText/:sportYear/:week", templateUrl: "partials/weeklyTextSchedule.html", controller: "scheduleWeeklyTextController" });
    $stateProvider.state("/Contract/GameList/", { url: "/Contract/GameList/:conference/:year", templateUrl: "partials/contractGameList.html", controller: "contractGameListController" });
    $stateProvider.state("/CopyrightAndDisclaimer", { url: "/CopyrightAndDisclaimer", templateUrl: "partials/copyrightAndDisclaimer.html", controller: "copyrightController", title: "Copyright And Disclaimer" });
}]);

app.controller('scheduleWeeklyController', function ($scope, $routeParams) {

    $scope.message = 'Weekly Schedule: ' + $routeParams.sportYear + ' Week: ' + $routeParams.week;

});

app.controller('scheduleWeeklyTextController', function ($scope, $routeParams) {

    $scope.message = 'Weekly Text Schedule: ' + $routeParams.sportYear + ' Week: ' + $routeParams.week;

});

app.controller('contractGameListController', function ($scope, $routeParams) {

    $scope.message = 'Contract Game List: ' + $routeParams.conference + ' Week: ' + $routeParams.year;

});
