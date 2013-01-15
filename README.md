# Yipit API

This hopefully makes it a little bit easier to call Yipit's API

## Example

```js
var yipit = require("request");

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

**Hope you enjoy! Email me at khaliqgant@gmail.com for any questions or bugs