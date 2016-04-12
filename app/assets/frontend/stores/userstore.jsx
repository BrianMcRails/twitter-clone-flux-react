import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./appeventemitter";




let _users = [];


class UserEventEmitter extends AppEventEmitter {

	getAll(){
	 	return _users;
	 	}
	}


let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {

	//action.actionType === RECEIVED_TWEETS
	switch(action.actionType){
		case ActionTypes.RECEIVED_USERS:
			_users = action.rawUsers;
			UserStore.emitChange();
			break;
		default:
	}
});

export default UserStore;