'use strict';

app.controller('loginFormController', (memberService, modalService, $scope, $cookies) => {

    console.log('loginFormController');

    $scope.member = {
        email    : 'heowc1992@gmail.com',
        password : '1234'
    };

    $scope.login = () => {
        memberService.login($scope.member)
            .then(
                (response) => {
                    if( response.data !== '' ) {
                        $cookies.put('id', response.data.email);
                        modalService.closeLoginModal();
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    $scope.openJoinModal = () => {
        modalService.closeLoginModal();
        modalService.openJoinModal();
    };

});