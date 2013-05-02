signrequest
===========

JavaScript utility for signing OAuth or xAuth requests with HMAC-SHA1 in the browser.

Set up
======

    npm install requirejs

Usage
=====

example.html:

    <html>
    <head>
        <title>signrequest example</title>
    		<script data-main="example.js" src="require.js"></script>
    </head>

    <body>
    	Look at the console for the results of the example call.
    </body>

    </html>

example.js:

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
    
Output:
    
    {
      oauth_consumer_key: "theConsumerKey"
      oauth_nonce: "mV80JNOCsontEj5X"
      oauth_signature: "Y/0cJ6pdoUfctvIKvDweak9bpp8="
      oauth_signature_method: "HMAC-SHA1"
      oauth_timestamp: 1367520764085
      oauth_token: "theAccessToken"
      oauth_version: "1.0"
    }
    
And this object can be encoded and go into the Authorization field of the header of a signed request.


Dependencies
============
RequireJS.

TODO
====
- Cut out querystring.js.
- Move CryptoJS files back out into their own files.
- Header encoding function.
