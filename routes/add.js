var data = require("../data.json");

exports.addFriend = function(req, res) {
	console.log(data);
	data["friends"].push({
    	'newFriend': [
     	 	{ 
				'name': req.query.name,
				'description': req.query.description,
				'imageURL': "http://lorempixel.com/400/400/people"	
      		}
      	]
    });
	res.render('add', data);
	console.log(req.query.name);
};