/**
 * Created by gsposito on 15/01/2015.
 */
app.controller('addViewController',
    function addViewController($scope, guestApi){
        $scope.helloAngular = "ADD VIEW controller angular working";
        $scope.guest = { };

        $scope.addGuestClick = function(){
            guestApi.addGuest($scope.guest);
        }
    }
);