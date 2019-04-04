const { assert } = require('chai');
const sel = require('./selectors').loginEmail;
const val = require('./value').loginEmail;

describe('General', function () {

    it('Verify gmail login', function(){

        browser.url(val.google);
        $(sel.headingText).waitForVisible(1000);
        $(sel.inputemail).setValue(val.email);
        $(sel.next).click();
        $(sel.passwordNext).waitForVisible(3000);
        $(sel.inputPass).waitForVisible(3000);
        $(sel.inputPass).setValue(val.password);
        $(sel.passwordNext).click();
        $(sel.loading).waitForExist();
        $(sel.loading).waitForVisible(undefined, true);
        const is_expected_email = $(`a[aria-label*="modern.token.2019@gmail.com"]`).isExisting();


         assert.equal(is_expected_email, true);
    });



});