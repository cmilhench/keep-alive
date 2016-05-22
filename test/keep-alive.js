var keepAlive = require('..');
var assert = require('assert');
var nock = require('nock');

describe('Keep Alive', function(){

  before(function() {
    nock.disableNetConnect();
  });

  after(function() {
    nock.enableNetConnect();
  });

  describe('request', function(){
    this.timeout(3000);
    it('should make http get request', function(done){
      var request = nock('http://www.test.com')
        .get('/ping')
        .once()
        .reply(200, 'Test Response');
      keepAlive('http://www.test.com/ping', 2000);
      setTimeout(function () {
        assert(request.isDone());
        done();
      }, 2000);
    });
  });

  describe('ctor', function(){
    it('should call add', function(){
      var called = 0;
      var old = keepAlive.add;
      keepAlive.add = function(){ called++; };
      keepAlive();
      keepAlive.add = old;
      assert(called === 1);
    });
  });

  describe('add', function(){
    it('should add keepAlive', function(){
      var keepAlives = keepAlive.add('key', 6000).list();
      assert(Object.keys(keepAlives).indexOf('key') !== -1);
    });
    it('in v2, should recalculate frequencies');
    it('in v2, should recalculate iterations');
  });

  describe('remove', function(){
    it('should remove keepAlive', function(){
      var keepAlives = keepAlive.add('key', 6000).remove('key').list();
      assert(Object.keys(keepAlives).indexOf('key') === -1);
    });
    it('in v2, should recalculate frequencies');
    it('in v2, should recalculate iterations');
  });

  describe('list', function(){
    it('should return keepAlives', function(){
      var keepAlives = keepAlive.list();
      assert(keepAlives !== undefined);
    });
  });

});
