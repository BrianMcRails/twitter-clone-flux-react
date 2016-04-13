class AddRetweetNameToTweets < ActiveRecord::Migration
  def change
  	change_table :tweets do |t|
  		t.integer :retweet_id
  	end
  end
end
