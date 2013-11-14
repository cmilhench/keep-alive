
var request = require('request');

exports = module.exports = keepAlive;

var interval = 1000, loop = 0, max = 1, keepAlives = {};

function keepAlive(url, frequency) {
  return exports.add(url, frequency);
}

/**
 * 
 * The resolution of this process is 1000 milliceconds,
 * so anything with a frequency less than 1000 will be 
 * processed every time (and no more);
 */
exports.add = function(url, frequency){
  var iteration = (frequency || 1200000) / interval;
  max = Math.max(max, iteration);
  keepAlives[url] = { frequency: frequency, iteration: iteration };
  return exports;
};

exports.remove = function(url){
  delete keepAlives[url];
  return exports;
};

exports.list = function(){
  return keepAlives;
};

var process = function() {
  var keys = Object.keys(keepAlives);
  loop = ++loop % max;
  for (var i = keys.length - 1; i >= 0; i--) {
    if ((loop % keepAlives[keys[i]].iteration) === 0) {
      console.log(new Date(), loop, keys[i]);
      //request.get(keys[i]);
    }
  }
  return setTimeout((function() { return process(); }), interval);
}
process();

