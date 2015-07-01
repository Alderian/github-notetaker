var React = require('react');
var Main = require('../components/Main.jsx');
var Home = require('../components/Home.jsx');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
	<Route name="app" path="/" handler={Main}>
		<DefaultRoute handler={Home} />
	</Route>
);