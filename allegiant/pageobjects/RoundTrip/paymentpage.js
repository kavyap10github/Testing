class PaymentPage {

    getSite() {
        $("//*[@data-hook='payment-page_ice-popup_close']").click();
        browser.pause(1000);
        var strUrl7 =browser.getUrl();
        console.log("URL is :"+strUrl7);
        browser.pause(1000);
    }

    enterDetails() {
    // $("//input[@id='card-holder-name']").setValue('name nameL');
    // browser.pause(1000);
    $("//input[@id='card-number']").setValue('5454545454545454');
    browser.pause(2000);

    $("//*[text()='Month']").click();
    browser.pause(1000);
    $("//div[contains(text(),'December')]").click();
    browser.pause(2000);

    $("//*[text()='Year']").click();
    browser.pause(1000);
    $("//div[contains(text(),'2030')]").click();
    browser.pause(2000);

    $("//input[@id='card-cvv']").setValue('737');
    browser.pause(2000);

    // $("//input[@id='first-name']").setValue('Kavya');
    // browser.pause(1000);
    // $("//input[@id='last-name']").setValue('Mohan');
    // browser.pause(1000);
    $("//input[@id='address-line-1']").setValue('test');
    browser.pause(2000);
    $("//input[@id='address-line-2']").setValue('sdfghj');
    browser.pause(2000);
    $("//input[@id='city']").setValue('sdfghj');
    browser.pause(2000);
    $("//input[@id='state']").setValue('California');
    browser.keys('Enter');
    browser.pause(2000);
    $("//input[@id='zip-code']").setValue('667777888');
    browser.pause(2000);
    $("//input[@id='phone-number']").setValue('12341678901');
    browser.pause(2000);
    $("//input[@id='email-address']").setValue('kavya.mohan@allegiantair.com');
    browser.pause(2000);
    $("//*[@data-hook='payment_terms-and-conditions-checkbox_label']//*[@fill='#fff']").click();
    browser.pause(2000);

    $("//span[contains(text(),'PURCHASE MY TRIP')]").click();
    browser.pause(20000);
    }
}
export default new PaymentPage();