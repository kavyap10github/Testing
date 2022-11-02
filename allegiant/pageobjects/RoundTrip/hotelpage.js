class HotelPage {

    getSite() {

        var strUrl6 =browser.getUrl();
        console.log("URL is :"+strUrl6);
        browser.pause(1000);
    }

    selectHotel(hotelName,roomNo) {
        $(hotelName).click();
        browser.pause(1000);
        $(roomNo).click();
        browser.pause(1000);
        $("//span[contains(text(),'Continue')]").click();
        browser.pause(5000);

    }
}
export default new HotelPage();