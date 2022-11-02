class BundlePage{

    getSite() {
        var strUrl2 =browser.getUrl();
        console.log("URL is :"+strUrl2);
        browser.pause(1000);
    }

    continue() {
         $("//*[@data-hook='bundles-page_skip']").waitForClickable();
         $("//*[@data-hook='bundles-page_skip']").click();
         browser.pause(10000);
    }
}

export default new BundlePage();