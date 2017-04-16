'use strict';

app.controller('noticeWriteController', (noticeService, $scope, $location) => {

    console.log('noticeWriteController');

    $scope.options = {
        // toolbar: [
        //     ['style', ['bold', 'italic', 'underline', 'clear']],
        //     ['fontsize', ['fontsize']],
        //     ['color', ['color']],
        //     ['para', ['ul', 'ol', 'paragraph']],
        //     ['height', ['height']],
        //     ['saveButton', ['save']]
        // ],
        // buttons: {
        //     save: SaveButton
        // },
        popover: {
            image: [],
            link: [],
            air: []
        }
    };

    $scope.save = () => {
        console.log($scope.text);

        let notice = {
            title   : 'test',
            content : $scope.text,
            writer  : 'heowc'
        };

        if($scope.text.length > 0) {
            noticeService.create(notice)
                .then(
                    (response) => {
                        alert('success!!');
                        $location.path('notice');
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    };
});