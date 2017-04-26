'use strict';

app.controller('loginFormController', (memberService, modalService, $scope, $uibModal, $timeout, $route) => {

    console.log('loginFormController');

    $scope.member = {
        email    : 'heowc1992@gmail.com',
        password : '1234'
    };

    $scope.login = () => {
        memberService.login($scope.member)
            .then(
                (response) => {
                    modalService.closeLoginModal();
                },
                (error) => {
                    console.log(error);
                }
            );
    };
});