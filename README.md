# Yipit V1 API

This hopefully makes it a little bit easier to call Yipit's V1 API

# Install #

# Example #

```js
var yipit = require("yipit");

var params = {
    "key": YOUR_API_KEY_THIS_IS_REQUIRED
    "division": "new-york".
    "tag": "restaurants";
};

yipit.deals(params, function (error, deals){
    if (!error){
        console.log(deals);
    }
});

```

# References #
- [Request API Key](http://yipit.com/about/api/)
- [API Documentation](http://yipit.com/about/api/documentation/)
- [HTTPRequest Documentation](https://github.com/keverw/HTTPRequest)

**Hope you enjoy! Email me at khaliqgant@gmail.com for any questions or bugs