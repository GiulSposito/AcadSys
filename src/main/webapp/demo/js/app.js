/**
 * Created by gsposito on 15/01/2015.
 */
'use strict';

<!-- gapi endpoints starting code -->
function init(){
    asyncLoadApi('//' + window.location.host + '/_ah/api');
}

function asyncLoadApi(apiRoot) {
    // Loads the OAuth and helloworld APIs asynchronously, and triggers login
    // when they have completed.
    var apisToLoad;
    var callback = function() {
        if (--apisToLoad == 0) {
            console.log("!! EngPoints Loaded !!");
        }
    }

    apisToLoad = 1; // must match number of calls to gapi.client.load()
    gapi.client.load('guestApi', 'v1', callback, apiRoot);
};


<!-- angular declarion -->
var app = angular.module('app',['ngRoute'])
    .config( function($routeProvider) {
        $routeProvider.when('/list',
            {
                templateUrl: 'view/listView/listView.html',
                controller: 'listViewController'
            }
        ).when('/add',
            {
                templateUrl: 'view/addView/addView.html',
                controller: 'addViewController'
            }
        );
    });
