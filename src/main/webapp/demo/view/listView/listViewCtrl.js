/**
 * Created by gsposito on 15/01/2015.
 */
app.controller('listViewController',
    function listViewController($scope, guestApi){
        $scope.helloAngular = "LIST VIEW controller angular working";

        gapi.client.guestApi.getAllGuests().execute(
            function(resp) {
                console.log('resp ->');
                console.log(resp);
                console.log('resp.items ->');
                console.log(resp.items);
                $scope.guestList = resp.items;
                $scope.$apply();
            }
        );

        /*
        //$scope.guestList = guestApi.getAllGuests();
        guestApi.getAllGuestsRemote(function(resp){
            console.log(resp.items);
        })
        */
    }
);