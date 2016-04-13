import React from 'react';
import ServerActions from "./actions/serveractions"

export default {
	getAllTweets(){
		console.log(2, "API.getAllTweets");
		$.get('/tweets')
		.success( rawTweets => ServerActions.receivedTweets(rawTweets))
		.error(error => console.log(error));
	},
	createTweet(body){
		$.post('/tweets', { body: body })
		.success( rawTweet => ServerActions.receivedOneTweet(rawTweet))
		.error(error => console.log(error));
	},
	createRetweet(body, name){
		$.post('/tweets', { body: body, is_retweet: 1, retweet_name: name })
		.success( rawRetweet => ServerActions.receivedOneRetweet(rawRetweet))
		.error(error => console.log(error));
	},
	getAllUsers(){
		$.get('/followers/random')
		.success( rawUsers => ServerActions.receivedUsers(rawUsers))
		.error(error => console.log(error));
	},
	followUser(userId){
		$.post("/followers", { user_id: userId })
		.success( rawFollower => ServerActions.receivedOneFollower(rawFollower))
		.error(error => console.log(error));
	}	
}