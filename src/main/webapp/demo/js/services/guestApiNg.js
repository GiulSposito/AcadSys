/**
 * Created by gsposito on 15/01/2015.
 */
var guestDataCache = [];

app.factory('guestApi', function(){

    console.log("!!! guestApi Factory !!!");

    guestDataCache = [
        {login:'gsposito',fullName:'Giuliano Sposito'},
        {login:'hilramos',fullName:'Hirs Ramos'},
        {login:'psilva',fullName:'Priscila Silva'}
    ];

    return {
        data:guestDataCache,
        getAllGuests:function(){ return guestDataCache;},
        addGuest:function(guest){ console.log(guest); },

        getAllGuestsRemote:function(callback){
            gapi.client.guestApi.getAllGuests().execute(
                function(resp) {callback(resp)}
            );
        }
    };
});