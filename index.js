var request = require('request');
yipit = exports;
var http = require('http');

yipit.deals = function(params,callback){
    var url = 'http://api.yipit.com/v1/deals?';

    if (params.key !=null){
        url += "&key=" + params.key;
    }
    if (params.lat !=null){
        url += "&lat=" + params.lat;
    }
    if (params.lon !=null){
        url += "&lon=" + params.lon;
    }
    if (params.division !=null){
       url += "&division=" + params.division;
    }
    if (params.source !=null){
        url += "&source=" + params.source;
    }
    if (params.phone !=null){
        url += "&phone=" + params.phone;
    }
    if (params.tag !=null){
        url += "&tag=" + params.tag;
    }
    if (params.paid !=null){
        url += "&paid=" + params.paid;
    }
    if (params.limit != null){
        url += "&limit=" + params.limit;
    }

    var options = {
        hostname: url,
        method:'GET'
    };
    var req = http.request(options, function(res){
        console.log('STATUS: ' +res.statusCode);
    })

    return request.forever({uri:url, method:"GET"}, function(error,response,body){
        if (!error && response.statusCode == 200){
            //callback(null,response);
            callback(null,url);
            //callback(null,JSON.parse(body));
        }
        if (response.statusCode == 400){
            callback("400", null);
        }
        if (repsonse.statusCode == 401){
            callback("401", null);
        }
        if (response.statusCode == 403){
            callback("403", null);
        }
        if (response.statusCode == 404){
            callback("404", null);
        }
        if (response.statusCode == 405){
            callback("405", null);
        }
        if (response.statusCode == 409){
            callback("409", null);
        }
        if (response.statusCode == 500){
            return callback("500", null);
        }
    });
};

