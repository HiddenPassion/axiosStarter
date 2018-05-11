
const errorHandler = response => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error ('Unable to find that address.');
	}
};

const someErrorHandlerLogic = e =>{
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API servers.');
	} else {
		console.log(e.message);
	}
}

module.exports = {
	errorHandler,
	someErrorHandlerLogic
};