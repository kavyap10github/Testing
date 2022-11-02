import { Given, When, Then } from "@cucumber/cucumber";

import HomePage from '../pageobjects/RoundTrip/homepage';
import FlightPage from '../pageobjects/RoundTrip/flightpage';
import BundlePage from '../pageobjects/RoundTrip/bundlepage';
import TravellerPage from '../pageobjects/RoundTrip/travellerdetailspage';
import SeatPage from '../pageobjects/RoundTrip/seatpage';
import BagPage from '../pageobjects/RoundTrip/bagpage';
import HotelPage from '../pageobjects/RoundTrip/hotelpage';
import CarPage from '../pageobjects/RoundTrip/carpage';
import PaymentPage from '../pageobjects/RoundTrip/paymentpage';
import ConfirmationPage from '../pageobjects/RoundTrip/confirmationpage';

Given(/^I am on the allegiant homepage$/,  function(){

    browser.maximizeWindow();
    browser.deleteAllCookies();
    browser.url("https://www.stg.allegiantair.com/");
    browser.pause(500);
    browser.refresh();
    $(".onetrust-close-btn-handler.onetrust-close-btn-ui.banner-close-button.ot-close-icon").click();
    browser.pause(1000);

});

When(/^I enter the destination details (.*) and (.*) and (.*) and (.*)$/, function(from,to,depDate,retDate){

    HomePage.search(from,to,depDate,retDate);
});

Then(/^It will go to flight details page$/, function() {
    FlightPage.getSite();
    
});

Then(/^I continue with the given flights$/, function(){
    
    FlightPage.continue();
    
});

Then(/^I go to bundle selection page$/, function() {

    BundlePage.getSite();
});

Then(/^I do not select any bundle$/, function(){

    BundlePage.continue();
});

Then(/^I go to traveller details page$/, function() {

    TravellerPage.getSite();
});

Then(/^I enter traveller details and continue$/, function(){

    TravellerPage.details();
});

Then(/^I go to seat selection page$/, function() {
    
    SeatPage.getSite();
    
});

Then(/^I select departing seat (.*) and returning seat (.*) and continue$/, function(depSeat,retSeat) {

    SeatPage.selectSeat(depSeat,retSeat);
});


Then(/^I go to bag page$/, function() {

    BagPage.getSite();
});
Then(/^I continue with the included package only$/, function() {

    BagPage.selectBag();
});

Then(/^I go to hotel page$/, function() {

    HotelPage.getSite();
});

Then(/^I select a hotel (.*) and (.*) and continue$/, function(hotelName,roomNo) {

    HotelPage.selectHotel(hotelName,roomNo);
});

Then(/^I go to car page$/, function() {

    CarPage.getSite();
});

Then(/^I continue with selecting car$/, function() {

    CarPage.selectCar();
});

Then(/^I go to payment page$/, function() {

    PaymentPage.getSite();
});

Then(/^I enter payment information$/, function() {

    PaymentPage.enterDetails();
});

Then (/^I get the confirmation page$/, function() {

    ConfirmationPage.confirmticket();
});












