exports.Hello = function (req, res){

	res.send('Hello World!  id = ' +  req.query.id);
	//res.send(JSON.parse(req.body));



};
