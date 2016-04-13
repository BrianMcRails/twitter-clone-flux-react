class AddRetweetToTweets < ActiveRecord::Migration
  def change
  	change_table :tweets do |t|
  		t.boolean :is_retweet
  	end
  end
end
