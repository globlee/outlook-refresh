var request = require("request")
module.exports=function(refreshToken, clientID, clientSecret){

	var options = {
		url:"https://login.microsoftonline.com/common/oauth2/v2.0/token",
		form:{
			grant_type:"refresh_token",
			refresh_token:refreshToken,
			client_id: clientID,
			client_secret: clientSecret,
		}
	};
	request.post(options, function(err, res, body){
		try{
			body = JSON.parse(body);
		} catch (ex){
			console.log(ex)
		}
		return callback(body.access_token, body.refresh_token);
	});

};
