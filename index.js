var request = require("request")
module.exports=function(refreshToken, clientID, clientSecret, callback){

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
		if (err){
			return callback(err)
		} else {

			try{
				body = JSON.parse(body);
				if (body.error){
					return callback(body.error)
				} else {
					return callback(null, {token: body.access_token, refreshToken: body.refresh_token});
				}
			} catch (ex){
				console.log(ex)
				return callback(ex)
			}
		}
	});

};
