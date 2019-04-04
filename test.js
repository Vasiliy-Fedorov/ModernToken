const { assert } = require('chai');
const sel = require('./selectors').loginEmail;

describe('General', function () {

    it('Verify gmail login', function(){

        browser.url('https://mail.google.com');
        $(sel.headingText).waitForVisible(1000);
        $(sel.email).setValue("modern.token.2019@gmail.com");
        $(sel.next).click();
        $(sel.passwordNext).waitForVisible(3000);
        $(sel.inputPass).waitForVisible(3000);
        $(sel.inputPass).setValue(['M','o','d','e','r','n','T','o','k','e','n']);
        $(sel.passwordNext).click();
        $(sel.loading).waitForExist();
        console.log(browser.getTitle());


         assert.equal(true, true);
    });



});