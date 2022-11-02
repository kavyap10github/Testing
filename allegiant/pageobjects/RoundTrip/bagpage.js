class BagPage {

    getSite() {
        var strUrl5 =browser.getUrl();
        console.log("URL is :"+strUrl5);
        browser.pause(1000);
    }

    selectBag() {
        $('.Button__StyledButton-sc-1ececxa-1.ijtqnd.PageFooter__ContinueButton-sc-12arybe-0.jnUVpt').click();
        browser.pause(2000);
        $('//*[@data-hook="ancillaries-continue-popup_button_continue"]').click();
        browser.pause(1000);
    }
}
export default new BagPage();