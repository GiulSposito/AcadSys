'use strict';

fullStackApp.controller('fullStackCrtl', 
	function($scope){
		
		
		/*$scope.guest1 = { 
							"id": "",
		                	"login": "",
		                	"fullName": ""
		                };
		*/
		$scope.remoteCall = function(){
			$scope.helloMessage='AngularJS Working!';
			/*
			$scope.guest1 = {
             	   "id": "---",
            	   "login": "remote",
            	   "fullName": "remoting()"
            	 };
			*/
			console.log('remote invocation');
			gapi.client.guestApi.getAllGuests().execute(
					function(resp) {
						console.log('remote response');
						console.log(resp.items[0]);
						//$scope.guest1 = resp.items[0];
						$scope.guests = resp.items;
						$scope.$apply();
					}
			);
			
		}
		
		$scope.guests = []; /*[
		                 {
		                	   "id": "5066549580791808",
		                	   "login": "fakeLogin",
		                	   "fullName": "fakeName"
		                	  },
		                	  {
		                	   "id": "5629499534213120",
		                	   "login": "mockLogin",
		                	   "fullName": "mockName"
		                	  },
		                	  {
		                	   "id": "6192449487634432",
		                	   "login": "mockLogin2",
		                	   "fullName": "mockLogin3"
		                	  }
		                	 ];*/
		
	}
);