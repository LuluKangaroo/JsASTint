function debug(s) { 
//	dump('** login.js: [' + s + ']\n'); 
	}
function FacebookLoginClient(){	  
}
FacebookLoginClient.prototype = {
		    findNamespace: /xmlns=(?:"[^"]*"|'[^']*')/,
		    secret: 'b712cd40f01b46318722a53fe72f1c56',
		    api_key: 'c82f3ddc620da35680a53b8042b604b2',
		    generateSig: function (params) {
		        var str = '';
		        params.sort();
		        for (var i = 0; i < params.length; i++) {
		            str += params[i];
		        }
		        str += this.secret;
		        return MD5(str);
		    },
		    callMethod: function (method, params, callback) {
		        params.push('method=' + method);
		        params.push('api_key=' + this.api_key);
		        params.push('v=1.0');
		        params.push('sig=' + this.generateSig(params));
		        var req = new XMLHttpRequest();
		        var ns_re = this.findNamespace;
		        req.onreadystatechange = function (event) {
		            if (req.readyState == 4) {
		                var status;
		                try {
		                    status = req.status;
		                } catch (e) {
		                    status = 0;
		                }

		                if (status == 200) {
		                    req.text = req.responseText.substr(req.responseText.indexOf("\n"));
		                    var ns = req.text.match(ns_re);
		                    if (ns)
		                      default xml namespace = ns;
		                    req.xmldata = new XML(req.text);
		                    callback(req);
		                }
		            }
		        };
		        try {
		            var restserver = 'https://api.facebook.com/restserver.php';
		            req.open('POST', restserver, true);
		            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		            req.send(params.join('&'));
//		            debug( params.join('&') + "\n" );
		        } catch (e) {
		            alert('Exception sending REST request: ' + e + '\n');
		        }
		    }
		};

var client = new FacebookLoginClient();

var Cc = Components.classes;
var Ci = Components.interfaces;

var fbns   = new Namespace( "http://api.facebook.com/1.0/" );
function startup() {
    if (!client.authToken) {
        debug('requesting token');
        try {
        client.callMethod('facebook.auth.createToken', [], function(req) {
            debug('received token response:');
            debug( req.responseText); 
            client.authToken = req.xmldata;
            debug('token is: '+client.authToken);
            startup();
        });
        } catch (e) {
            debug('exception: ' + e);
        }
    } else {
        var browser = document.getElementById('facebook-login-body');
        var login_base = 'http://www.facebook.com/login.php?popup&v=1.0&api_key=';
        browser.setAttribute('src', login_base +
                             client.api_key + '&auth_token=' + client.authToken);
        browser.style.display = '';
        document.getElementById('throbber-box').style.display = 'none';
        debug('loading login page');
    }
}
window.addEventListener('load', startup, false);

function done() {
    debug('done()');
    if (!client.authToken) {
        window.close();
        return false;
    }
    debug(client.authToken);
    client.callMethod('facebook.auth.getSession', ['auth_token='+client.authToken], function(req) {
        debug('received session response:');
        debug(req.xmldata);
        var data = req.xmldata;
        var sessionKey    = data.fbns::session_key;
        var sessionSecret = data.fbns::secret;
        var uid           = data.fbns::uid;
        if(uid && uid.toString().length > 0){
        	if(window.arguments[0].changePassword){
        		window.openDialog("chrome://fbchathistory/content/changePassword.xul", "",
           			 "chrome, modal,dialog,centerscreen, resizable=yes", {uid:uid}).focus();
        	}
        	else{
        		window.openDialog("chrome://fbchathistory/content/createAccount.xul", "",
         			 "chrome, modal,dialog,centerscreen, resizable=yes", {uid:uid}).focus();
        	}
        }
        else{
        	alert("Can't get Facebook userid. Please login to Facebook and try again.");
        }
        window.setTimeout('window.close()', 1);
    });
    // in case the request fails, let's just force a 4 second timeout
//    window.setTimeout('window.close()', 4000);
    return false;
}

