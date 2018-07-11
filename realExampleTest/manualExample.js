var sensitiveInfo;

var req = new XMLHttpRequest();

try {
    var restserver = 'https://api.facebook.com/restserver.php';
    req.open('POST', restserver, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(sensitiveInfo);
} catch (e) {
    alert('Exception sending REST request: ' + e + '\n');
}