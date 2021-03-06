import React from 'react';
import API from "../API"

export default {
	getAllTweets(){
		console.log(1, "TweetActions");
		API.getAllTweets();
	},
	sendTweet(body){
		API.createTweet(body);
	},
	sendRetweet(body, name){
		API.createRetweet(body, name);
	}
}