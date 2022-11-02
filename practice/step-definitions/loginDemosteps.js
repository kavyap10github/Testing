import {Given,When,Then} from '@cucumber/cucumber';
// import $ from 'webdriverio/build/commands/browser/$';

const userName = "//input[@name='userName']";
const password = "//input[@name='password']";
const submitButton = "//input[@name='submit']";
Given(/^I am on the login page$/,function(){
    browser.maximizeWindow();
    browser.deleteAllCookies();
browser.url("http://demo.guru99.com/test/newtours/");
browser.pause(5000);
});

When(/^I log in with a default user$/,function(){
    browser.pause(5000);
    $(userName).click();
    $(userName).setValue('mercury');
    browser.pause(5000);
    $(password).click();
    $(password).setValue('mercury');
    $(submitButton).click();
    browser.pause(10000);
});

Then(/^I shall be on the login success page$/,function(){
var strUrl =browser.getUrl();
console.log("URL is :"+strUrl);
});