
const widgets = {}

var rootSelector = 'body';
var selectors = {
  userField: '#user_username',
  passwordField: '#user_password',
  form: 'form'
};

widgets.login = {
  loginToApp: function*(email, password) {
    yield browser.setValue(selectors.userField, 'foo');
    yield browser.setValue(selectors.passwordField, 'letMe1n');
    yield browser.submitForm(selectors.form);
  }
}

export { widgets };