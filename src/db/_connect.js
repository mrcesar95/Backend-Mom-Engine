const mongoose = require('mongoose');

function _connect () {

	const URI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
	mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
		.then(
			()=> {
				console.log('conection db ok');
			},
			(err) => {
				console.log('connection error', err);
			}
		)


}

module.exports = _connect