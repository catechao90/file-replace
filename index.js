var fs = require("fs");
var find = require('find'), path = require("path");

var fileReplace = module.exports = {
  	go: function(file, destination, callback) {
	  	find.file(file, path.resolve(__dirname, '../../'+destination), function(files) {
	     	files.forEach(function (item,index,array){
	      		fs.writeFileSync(item, fs.readFileSync(file));
	     	});
	     	return callback(files);
		})
  	}
};


