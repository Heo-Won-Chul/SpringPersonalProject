'use strict';

app.controller('noticeListController', (noticeService, uibDateParser, $scope) => {

    console.log('noticeListController');

    noticeService.getNotices()
                .then(
                    (response) => {
                        console.log(response.data.content);
                        $scope.notices = response.data.content;
                    },
                    (error) => {
                        console.log(error);
                    }
                );

    $scope.detail = (index) => {
        noticeService.getById($scope.notices[index].idx)
                    .then(
                        (response) => {
                            //
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
    };

    $scope.delete = (index) => {
        noticeService.deleteById($scope.notices[index].idx)
                    .then(
                        (response) => {
                            $scope.notices.splice(index, 1);
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
    };
});