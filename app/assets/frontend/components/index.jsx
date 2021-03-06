import React from 'react';
import { Link } from 'react-router'; //since we used link, we need to import link property from router library
import TweetBox from './tweetbox';
import TweetsList from './tweetslist';
import TweetActions from '../actions/tweetactions';
import TweetStore from '../stores/tweetstore';
import Friends from './friends';


let getAppState = () => {
	return {tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
	constructor(props){
		super(props);
		this.state = getAppState();
		this._onChange = this._onChange.bind(this);

	}
	componentDidMount() {
		TweetActions.getAllTweets();
		TweetStore.addChangeListener(this._onChange);
		// $.ajax("/tweets")
		// .success(data => this.setState(this.formattedTweets(data)))
		// .error(error => console.log(error));
	}
	componentWillUnmount() {
		TweetStore.removeChangeListener(this._onChange);

	}
	_onChange() {
		console.log(5, "Main._onChange");
		this.setState(getAppState());
	}
	render() {
		return (
			<div className="container">
			<Link to="/follow">Who to follow</Link>
			<Link to="/friends">My Friends</Link>
			<TweetBox />
			<TweetsList tweets={this.state.tweetsList}/>
			<Friends />
			</div>
		);
	}
}
