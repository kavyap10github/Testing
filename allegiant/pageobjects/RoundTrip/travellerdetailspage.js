class TravellerPage {

    getSite() {
    var strUrl3 =browser.getUrl();
    console.log("URL is :"+strUrl3);
    browser.pause(1000);
    }

    details() {
    $("//*[@placeholder='First Name']").click();
    $("//*[@placeholder='First Name']").setValue('Kavya');
    browser.pause(1000);

    $("//*[@placeholder='Last Name']").click();
    $("//*[@placeholder='Last Name']").setValue('Mohan');
    browser.pause(1000);

    $("//*[@data-hook='travelers-form_adults_0_gender_FEMALE']//*[@fill='#ffffff']").click();
         
    browser.pause(1000);


    $("//div[contains(text(),'Month')]").click();
    browser.pause(1000);
    $("//input[@id='adults.0.dob-month']").setValue('October');
    browser.keys('Enter');
    browser.pause(1000);


    $("//div[contains(text(),'Day')]").click();
    browser.pause(1000);
    $("//input[@id='adults.0.dob-day']").setValue('8');
    browser.keys('Enter');
    browser.pause(1000);


    $("//*[@placeholder='Year']").click();
    browser.pause(1000);
    $("//input[@id='adults.0.dob-year']").setValue('2000');
    browser.pause(1000);


    $("//*[text()='Continue']").click();
    browser.pause(10000);
    }
}

export default new TravellerPage()