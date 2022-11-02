class ConfirmationPage{

    confirmticket() {

    var itineraryNumber = $("//*[@data-hook='confirmation-number_text']").getText();
    console.log("Itinerary is :"+itineraryNumber);
    browser.pause(5000);
    }
}
export default new ConfirmationPage();