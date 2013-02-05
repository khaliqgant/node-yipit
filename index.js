var yipit = exports;
var HTTPRequest = require('HTTPRequest');

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

    return HTTPRequest.get(url, function (status,headers,content){
        //need some type of error checking
        return callback(null,JSON.parse(content))
    });
};

