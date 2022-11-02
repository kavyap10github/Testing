import { Given, When, Then } from "@cucumber/cucumber";
import { assert } from "chai";

const login = "//*[@data-cy='LoginHeaderText']";
const inputUserName = "//input[@name='username']";
const continueBtn = "//*[@data-cy='continueBtn']";
//const continueBtn = '/html/body/div[1]/div/div[1]/div[1]/div[2]/div[2]/section/form/div[2]/button/span';
const inputPassword = "//input[@name='password']";
//const inputPassword = '/html/body/div[1]/div/div[1]/div[1]/div[2]/div[2]/section/form/div[1]/div/input[2]';
const submitBtn = "//*[text()='Login']";
const loggedUser = "//*[@data-cy='loggedInUser']";

Given(/^I am on the make my trip homepage$/,  function(){

    browser.maximizeWindow();
    browser.deleteAllCookies();
    browser.url("https://www.makemytrip.com/");
    

});

When(/^I login with username (.*) and password (.*)$/, function(username, password){

    $(login).click();
    //browser.pause(5000);
    $(inputUserName).waitForDisplayed({ timeout: 15000 });
     $(inputUserName).click();
     $(inputUserName).setValue(username);
     //browser.pause(5000);
     $(continueBtn).waitForDisplayed({ timeout: 15000 });
     $(continueBtn).click();
     //browser.pause(5000);


     $(inputPassword).waitForDisplayed({ timeout: 15000 });
     $(inputPassword).click();
     $(inputPassword).setValue(password);
     browser.pause(5000);
     $(submitBtn).click();
     browser.pause(5000);

});

Then(/^It will show (.*)$/, function(message){
    
     assert.equal($(loggedUser).getText(),message,"Login failed")
});