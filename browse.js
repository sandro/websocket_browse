// Browse module needs to be added to the modules directory inside of
// node.websocket.js.
// Download the server from git://github.com/Guille/node.websocket.js.git
var browsers = [];
var Module = this.Module = function(data, connection){
};

Module.prototype.onData = function(data, connection) {
  if (data == "browser") {
    browsers.push(connection);
  }
  else if (data.match(/^http/)) {
    for (index in browsers) {
      browsers[index].send(data);
    }
  }
};
