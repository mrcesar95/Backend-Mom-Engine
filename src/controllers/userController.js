const getModelByName = require('../db/getModelByName');

module.exports.singup = function (req, res) {
	if (!req.body.user) return res.status(200).send({ success: false, error: 'user ninfo5 not found'});

	const User = getModelByName('user');

	try {
		User.singup(req.body.user)
			.then(() => {
				res.status(200).send({ success: true, message: "user created succesfully" });
			}).catch(error => res.status(200).send({success: false, error: error.message}))
	}
		catch(error) {
			res.status(500).send({ success: false, error: error.message});
		}
	};

module.exports.confirmAccount = function (req, res) {
	const User = getModelByName('user');

	try {
		User.confirmAccount(req.params.token)
		.then(() => {
			res.status(200).send({ success: true, message: 'user confirmed succesfully'});

		}).catch(err => res.status(200).send({success: false, error: err.message}))
	} catch(err) {	
		res.status(500).send({ success: false, error: err.message});
	}
}

