var self = require("self");
var data = self.data; // access to JS scripts
var Request = require("request").Request; // Load API
var tabs = require("tabs"); // Access tabs
var ss = require("simple-storage"); // Store version

// Global variables
var skus_dict = null;
var last_fetch_on = null;

// Fetches the URLs
function fetchUrls() {
    var skuReq = Request({
        url: "http://api.shoptimate.com/v1/skus",
        onComplete: function (response) {
            skus_dict = response.json;
            last_fetch_on = new Date().getTime();           
        }
    }).get();
}

// Checks the URL
function isValidUrl(url) {
    // Not initialized ? Maybe need to retry
	if (!skus_dict) {
	    if ((new Date().getTime() - last_fetch_on) < 1000*60) { // not initialized yet ?
		    return null;
		} else { // A minute has passed, retry
		    fetchUrls();
		}
	}
	
	// Poison pill, don't keep the data more than 1 week
	if ((new Date().getTime() - last_fetch_on) > 1000*60*60*24*7) {
	    fetchUrls();
	}
	for (site in skus_dict) {
	    entries = skus_dict[site];
	    for (key in entries) {
	        entry = entries[key];
	        regex = entry['url'];
	        if (regex !== undefined && url.match(regex)) {
	            entry['site'] = site;
	            return entry
	        }
	    }
	}
	return null;
}

// Notification URL
function generateNotificationUrl(site, sku) {
    if (!site || !sku) {
        return null;
    }
    // Create the iframe URL
    var v = "1";
    var country = "xx";
    var locale = "xx";
    return "http://toolbar.shoptimate.com/v" + v + "/" + country + "/" + locale + "/" + site + "/" + sku + "/firefox.html?extensionversion=" + getVersion();
}

// Figure out the SKU and site and show the toolbar
function launchNotification(worker, tab, entry) {
    var site = entry['site'];
    var sku = null;
    var notif_url = null;
    if (entry['type'] == 'url') {
        var regex = entry['sku'];
        m = tab.url.match(regex);
        if (m && m[1]) {
            sku = m[1];
        }
        notif_url = generateNotificationUrl(site, sku);
    } else if (entry['type'] == 'xpath') {
        xpath = entry['sku'];
        executeXPath(tab, site, xpath);
        return;
    } else if (entry['type'] == 'cart') {
        notif_url = generateCartNotificationUrl(site);
    }
    
    if (!notif_url) {
        return null;
    }
    showNotification(worker, notif_url);    
}

function showNotification(worker, url) {
    worker.port.emit("showNotification", {'url' : url});
}

// Listen from Mozilla to say when a page is ready
tabs.on('ready', function(tab) {
    entry = isValidUrl(tab.url)
    if (entry != null) {
        worker = tab.attach({
            contentScriptFile: data.url("shoptimate-notification.js")
        });
        launchNotification(worker, tab, entry);
    }
});

function onInstall() {
    tabs.open({'url' : 'http://toolbar.shoptimate.com/installed/' + getVersion() + '/'});
}

function onUpdate() {
    tabs.open({'url' : 'http://toolbar.shoptimate.com/updated/' + getVersion() + '/'});
}

function getVersion() {
	return self.version;
}

// Load Welcome pages if needed
if (self.loadReason == "install") {
    onInstall();
} else if (self.loadReason == "upgrade") {
    onUpdate();
}
