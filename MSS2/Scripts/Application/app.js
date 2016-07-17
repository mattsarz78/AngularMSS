var app = angular.module('mattSarzSports', ['ngRoute', 'ngLoadScript', 'cssLoader']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", { templateUrl: "partials/home.html", controller: "homeController", title: "MattSarzSports.com", css:"css/home.css"})
        .when("/Season/Contents/:sportYear", { templateUrl: "partials/seasonContents.html", controller: "seasonContentsController", css:"css/seasonContents.css"})
        .when("/Schedule/Weekly/:sportYear/:week", { templateUrl: "partials/weeklySchedule.html", controller: "scheduleWeeklyController"})
        .when("/Schedule/WeeklyText/:sportYear/:week", { templateUrl: "partials/weeklyTextSchedule.html", controller: "scheduleWeeklyTextController"})
        .when("/Contract/GameList/:conference/:year", { templateUrl: "partials/contractGameList.html", controller: "contractGameListController"})
        .when("/CopyrightAndDisclaimer", {templateUrl: "partials/copyrightAndDisclaimer.html", controller: "copyrightController", title: "Copyright And Disclaimer"});

}]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        switch (current.$$route.controller) {
            case 'scheduleWeeklyController':
                $rootScope.title = 'Weekly Schedule: ' + current.params.sportYear + ' Week: ' + current.params.week;
                break;
            case 'seasonContentsController':
                $rootScope.title = 'Season Contents: ' + current.params.sportYear;
                break;
            case 'scheduleWeeklyTextController':
                $rootScope.title = 'Weekly Text Schedule: ' + current.params.sportYear + ' Week: ' + current.params.week;
                break;
            case 'contractGameListController':
                $rootScope.title = 'Contract Game List: ' + current.params.sportYear + ' Week: ' + current.params.week;
                break;
            default:
                $rootScope.title = current.$$route.title;
        }
    });
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
