// es5
function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function () {
  return this.ip;
}

const aws = new Server('name', 'ip');

console.log(aws.getUrl());

// es6
class Server2 {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    console.log(this.ip);
  }
}

const aws2 = new Server2('name', 'ip2');

aws2.getUrl();