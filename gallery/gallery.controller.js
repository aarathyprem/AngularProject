(function () {
    'use strict';

    angular.module('myApp')
            .controller('GalleryController', GalleryController);

    GalleryController.$inject = ['$scope', '$http', '$window'];
    function GalleryController($scope, $http, $window) {
        angular.element("body").removeClass("body-bg");
        $scope.current = 1;
        $scope.limit = 10;
        $scope.photos = [];
        $scope.content;
        $scope.getAllItems = getAllItems;
        $scope.getItems = getItems;
        
        function getAllItems() {
            $http.get('http://jsonplaceholder.typicode.com/photos')
                    .success(function (data) {
                        $scope.content = data;
                        angular.forEach($scope.content.slice(0, $scope.limit), function(value, key) {
                            $scope.photos.push(value);
                        });
                        $scope.pageCount = Math.ceil($scope.content.length/$scope.limit);                         
                    })
                    .error(function (data) {
                        console.log("Something went wrong!!!");
                    });
        }
        
        function getItems(ptr) {
            if(ptr===0) {
                $scope.current = $scope.current - 1;
            } else {
                $scope.current = $scope.current + 1;
            }
            $scope.photos = [];
            angular.forEach($scope.content.slice((($scope.current-1) * $scope.limit), (($scope.current-1) * $scope.limit + $scope.limit)), function(value, key) {
                $scope.photos.push(value);
            });
            $window.scrollTo(0, 0);
        }
        $scope.changeIndex = function(index) {
            $scope.currentIndex = index;
        };
    }
})();