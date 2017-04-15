'use strict';

app.config(($routeProvider, $locationProvider) => {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/notice', {
            templateUrl : 'app/template/noticeList.html'
        })
        .when('/notice/write', {
            templateUrl : 'app/template/noticeWrite.html'
        })
        .otherwise({redirectTo: '/notice'});
});
