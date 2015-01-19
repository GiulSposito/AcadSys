package com.gsposito.gae.demo;

import java.util.List;

import static com.gsposito.gae.ObjectifyAppServices.ofy;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;

/** An endpoint class we are exposing */
@Api(name = "guestApi",
     version = "v1",
     namespace = @ApiNamespace(ownerDomain = "gae.gsposito.com",
                                ownerName = "gae.gsposito.com",
                                packagePath=""))

public class GuestAPI {
	
    /** A simple endpoint method that takes a name and says Hi back */
    @ApiMethod(name = "getAllGuests")
    public List<Guest> getAllGuests() {
    	return ofy().load().type(Guest.class).list();
    }
    
    @ApiMethod(name = "addGuest", httpMethod = "post")
    public Guest addGuest(Guest guest){
    	ofy().save().entity(guest).now();
    	return guest;
    }
	
	@ApiMethod(name = "removeGuest", httpMethod = "delete")
	public  Guest removeGuest(@Named("login")String login){
		Guest result = null;
		List<Guest> query = ofy().load().type(Guest.class).filter("login", login).list();
		if (query.size()>0) {
			result = query.get(0);
			ofy().delete().entity(result).now();
		}
		return result;
	}
	
}
