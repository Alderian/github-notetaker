var React = require('react');

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		BIO: React.PropTypes.object.isRequired
	},
	render: function(){
		return (
			<div>
				User Profile<br />
				Username: {this.props.username}<br />
				bio: {this.props.bio}
			</div>
		)
	}
});

module.exports = UserProfile;