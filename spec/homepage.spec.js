import { widgets } from './support';
import assert from 'assert';


describe('Scenario: Visiting the home page', function() {

  it("Given I have visited login page", function* () {
    yield browser.url(process.env.ROOT_URL || 'http://localhost:3000')
  });

  it("Then I have signed in", function* () {
    yield widgets.login.loginToApp()
  });

  it("Then I am in", function* () {
    yield browser.click('.profile img')
    yield browser.getText('.logged-in-as h4').then(function(heading){
      assert.equal( heading, "LOGGED IN AS JEFF DEVINE")
    })
  });
});
