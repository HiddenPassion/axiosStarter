const axios = require('axios');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const handler = require('./handler/handler');
const show = require('./show/show');



const address = '19146';



geocode
	.getGeocode(address)
	.then(
		(position) => {

			handler.errorHandler(position);
			show.logLocation(position);
			return weather.getWeather(position);
	})
	.then(
		(weather) => {
			show.logWeather(weather);
	})
	.catch((e) => {
		handler.someErrorHandlerLogic(e);
	});

