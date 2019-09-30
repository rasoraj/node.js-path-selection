var http = require('http');
var url = require('url');
var fs = require('fs');

    http.createServer(function(req, res){
        var qpath = url.parse(req.url , true).pathname;
        var fined = qpath.substring(1);
        fs.readFile(fined , function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }).listen(8204);

