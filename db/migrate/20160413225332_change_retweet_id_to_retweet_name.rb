class ChangeRetweetIdToRetweetName < ActiveRecord::Migration
  def change
  	rename_column :tweets, :retweet_id, :retweet_name
  	change_column :tweets, :retweet_name, :string
  end
end
