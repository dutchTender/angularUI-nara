'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/users");
  });


  describe('users', function() {

    beforeEach(function() {
      browser.get('index.html#!/users');
    });


    it('should render user when user navigates to /users', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for  uses/);
    });

  });


  describe('bu', function() {

    beforeEach(function() {
      browser.get('index.html#!/businessUnits');
    });


    it('should render businessUnits when user navigates to /businessUnits', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for businessUnits/);
    });

  });


  describe('pg', function() {

    beforeEach(function() {
      browser.get('index.html#!/preservationGroups');
    });


    it('should render preservationGroups when user navigates to /preservationGroups', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/partial for preservationGroups/);
    });

  });
});
