import React from 'react';
import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
	receivedTweets(rawTweets){
		console.log(3, "ServerActions.receivedTweets");
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_TWEETS,
			rawTweets: rawTweets
		})
	},
	receivedOneTweet(rawTweet){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_TWEET,
			rawTweet //same as rawTweet: rawTweet
		})
	},
	receivedOneRetweet(rawRetweet){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_RETWEET,
			rawRetweet
		})
	},
	receivedUsers(rawUsers){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_USERS,
			rawUsers: rawUsers
		})
	},
	receivedOneFollower(rawFollower){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
			rawFollower
		})
	}
}