class SeatPage{

    getSite() {
        var strUrl4 =browser.getUrl();
        console.log("URL is :"+strUrl4);
        browser.pause(1000);
    }

    selectSeat(depSeat,retSeat) {
        
        $(depSeat).click()  
        browser.pause(1000);
        $("//span[contains(text(),'Select Returning')]").waitForClickable();
        $("//span[contains(text(),'Select Returning')]").click();
        browser.pause(1000);
        $(retSeat).waitForClickable();
        $(retSeat).click();
        browser.pause(1000);
        $('.Button__StyledButton-sc-1ececxa-1.ijtqnd.PageFooter__ContinueButton-sc-12arybe-0.jnUVpt').click();
        browser.pause(5000);
    
    
    }
}
export default new SeatPage();