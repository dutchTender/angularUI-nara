'use strict';

describe('myApp.user module', function() {

  beforeEach(module('myApp.user'));

  describe('user controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var userCtrl = $controller('userCtrl');
      expect(userCtrl).toBeDefined();
    }));

  });
});