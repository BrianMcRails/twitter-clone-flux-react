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
	}	
}