const axios = require('axios');
const { backendUrl } = require('../app.settings');
const geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/';

const getGeocode = address => {
	let encodedAddress = encodeURIComponent(address);
	let geocodeUrl = `${geocodeUrl}json?address=${encodedAddress}`;
	return axios.get(geocodeUrl);
};


module.exports = {
	getGeocode
};