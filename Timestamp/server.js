var express = require('express');
var app = express();

app.use(express.static(__dirname ));

app.get("/:str", function (req, res) {
	// var pURL = url.parse(req.url, true);
	var result = {};
	var str = req.params.str;
	if (/^[0-9]+$/.test(str) == true){
		str = parseInt(str);
	}
	var date = new Date(str);
	if (date.getTime()){
		result.unix = date.getTime();
		result.natural = date.toDateString();
	}
	else{
		result.unix = null;
		result.natural = null;
	}
	res.json(result);
	res.end();
});
app.listen(process.env.PORT || 1010);
