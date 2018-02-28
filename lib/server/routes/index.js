const key = require('../../../config').key;
exports.index = function (req, res) {
	const req_key = req.query.key;
	if (req_key === undefined || req_key !== key)
		res.status(200).send({ success: false, message: "invalid parameter" });
	else {
		res.sendfile('lib/server/public/index.html');
	}
};