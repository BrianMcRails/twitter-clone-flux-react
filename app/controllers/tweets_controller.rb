class TweetsController < ApplicationController

	def index
		render json: Tweet.stream_for(current_user.id)
	end

	def create
		tweet = Tweet.create(body: params[:body], is_retweet: params[:is_retweet], retweet_name: params[:retweet_name], user_id: current_user.id)
		render json: tweet
	end

	private
	def tweet_params
		params.require(:tweet).permit(:body, :is_retweet, user_id: current_user.id)
	end
end
