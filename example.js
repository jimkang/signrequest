require(['authutils'], function(authutils) {
  var fullURL = location.protocol + '//' + location.host + 'somePath';
  var accessToken = 'theAccessToken';
  var tokenSecret = 'theTokenSecret';

  var authParams = {
    oauth_version: '1.0',
    oauth_consumer_key: 'theConsumerKey',
    oauth_signature_method: 'HMAC-SHA1',
  };
  if (accessToken) {
    authParams.oauth_token = accessToken;
  }        

  var authSigningOptions = {
    url: fullURL,
    requestMethod: 'POST',
    consumerSecret: 'theConsumerSecret'
  };                
  if (tokenSecret) {
    authSigningOptions.tokenSecret = tokenSecret;
  }

  var authParamsObject = 
    authutils.prepareXAuthData(authParams, authSigningOptions);
  
  console.log(authParamsObject);
});
