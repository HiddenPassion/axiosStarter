const axios = require('axios');

const weatherUrl = (response) => {
	const lat = response.data.results[0].geometry.location.lat;
	const lng = response.data.results[0].geometry.location.lng;
	return `https://api.forecast.io/forecast/69940370d7f7bd1cf5e6dd91598bbd51/${lat},${lng}`;
};

const getWeather = response => {
	return axios.get(weatherUrl(response));
};

module.exports = {
	getWeather
};