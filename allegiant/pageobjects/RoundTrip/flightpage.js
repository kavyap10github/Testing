class FlightPage {

    getSite() {
        var strUrl1 =browser.getUrl();
        console.log("URL is :"+strUrl1);
        browser.pause(1000);
    }

    continue() {
        $("//span[contains(text(),'Continue')]").waitForClickable();
        $("//span[contains(text(),'Continue')]").click();
        browser.pause(10000);
    }
}

export default new FlightPage();