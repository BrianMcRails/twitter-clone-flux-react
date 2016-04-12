import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./appeventemitter";




let _tweets = [];


class TweetEventEmitter extends AppEventEmitter {

	getAll(){
	 	return _tweets.map(tweet => {
	 		tweet.formattedDate = moment(tweet.created_at).fromNow();
	 		return tweet;
	 	});
	}
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {

	//action.actionType === RECEIVED_TWEETS
	switch(action.actionType){
		case ActionTypes.RECEIVED_TWEETS:
		console.log(4, "TweetStore");
		_tweets = action.rawTweets;
		TweetStore.emitChange();
		//
		break;
		case ActionTypes.RECEIVED_ONE_TWEET:
		_tweets.unshift(action.rawTweet);
		TweetStore.emitChange();
		default:
	}
});

export default TweetStore;