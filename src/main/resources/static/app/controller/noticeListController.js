'use strict';

app.controller('noticeListController', (noticeService, uibDateParser, $scope, $location) => {

    console.log('noticeListController');

    $scope.types = [
        {
            name : '제목',
            value : 'title'
        },
        {
            name : '내용',
            value : 'content'
        }];

    $scope.selectedType = $scope.types[0];

    $scope.detail = (index) => {
        $location.path(`notice/detail/${$scope.notices[index].idx}`);
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

    $scope.noticeSearch = (page) => {
        noticeService.getNotices(page, $scope.selectedType.value, $scope.keyword)
            .then(
                (response) => {
                    setNoticeListView(response.data);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const setNoticeListView = (data) => {
        console.log(data);
        $scope.bigTotalItems = data.totalElements;
        $scope.bigCurrentPage = data.number + 1;
        $scope.maxSize = 5;
        $scope.notices = data.content;
    }
});