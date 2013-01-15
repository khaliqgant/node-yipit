var yipit = require("../index"); //this should point to where the yipit module is located

var params = {
    "key": "your yipit api key giving you super powers - this is required or else nothing will work :/",
    "division": "some place that has lots of deals going down",
    "tag": "some kind of tag to make the call more specific",
    "lon": "33.454",
    "lat": "34.543"
};

yipit.deals(params, function(error,deals){
    if (!error){
        console.log(deals);
    }
});

