# outlook-refresh
####npm i --save outlook-refresh

Refresh access tokens with outlook

example:
```js
var outlook-refresh = require('outlook-refresh');
outlook-refresh(refreshToken, clientID, clientSecret, function(err, res){
  if (err){
    console.log(err)
  } else {
    console.log(res.token, res.refreshToken)
  }
});


```
