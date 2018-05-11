const logLocation = (response) => {
	console.log(response.data.results[0].formatted_address, '.\n\r', response.data.results[0].geometry.location);
};

const logWeather = (response) => {
	const temperature = response.data.currently.temperature;
	const apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It  feels like ${apparentTemperature}`);
}
module.exports = {
	logLocation,
	logWeather
};