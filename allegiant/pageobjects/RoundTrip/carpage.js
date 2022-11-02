class CarPage {

    getSite() {

        var strUrl7 =browser.getUrl();
        console.log("URL is :"+strUrl7);
        browser.pause(2000);

    }

    selectCar() {
        $("//span[contains(text(),\"No thanks, I don't need a deal on ground transport\")]").click();
        browser.pause(5000);
    }
}
export default new CarPage();