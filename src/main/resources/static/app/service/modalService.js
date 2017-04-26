'use strict';

app.factory('modalService', ($http, $uibModal, $route, $timeout) => {
    var modal;

    return {
        openLoginModal : () => {
            modal = $uibModal.open({
                animation: true,
                component : 'loginFormModalComponent'
            });
        },

        closeLoginModal : () => {
            modal.dismiss();

            $timeout(() => {
                $route.reload();
            }, 500);
        },

        openJoinModal : () => {
            modal = $uibModal.open({
                animation: true,
                component : 'joinFormModalComponent'
            });
        },

        closeJoinModal : () => {
            modal.dismiss();

            $timeout(() => {
                $route.reload();
            }, 500);
        }
    };
});