import React from 'react';
import TweetActions from "../actions/tweetactions";

export default class Tweet extends React.Component{
	retweet(event){
		event.preventDefault();
		TweetActions.sendRetweet(this.props.body, this.props.name);
	}
	render() {
		return (
			<li className="collection-item avatar">
      		<img className="circle" src={this.props.gravatar} />
     		<span className="title">{this.props.name} { this.props.is_retweet ? 
                <span className="blue-text">Retweeting: {this.props.retweet_name}</span> : null }</span>
     		<time>{this.props.formattedDate}</time>
     		<p>{this.props.body}</p>
     		<a className="secondary-content btn-floating grey"
     			onClick={this.retweet.bind(this)}>
     			<i className="small material-icons">repeat</i>
     		</a>
    		</li>
		)
	}

}
