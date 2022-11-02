
class HomePage {

    get dep() {
        return $("//*[text()='Departure, airport']");
    }
    
    get depPlace() {
        return $('#select-origin');
    }
    get dest(){
        return $("//*[text()='Destination, airport']");
    }
    get destPlace() { 
        return $('#select-destination');
    }
    get depDateBtn() {
        return $('//*[@data-hook="flight-search-date-picker_expand-start-date"]');
    }
    get searchBtn() { 
        return $('//*[text()="Search"]');
    }
    
    search(from,to,depDate,retDate){
        
         this.dep.click();
         browser.pause(2000);
         this.depPlace.setValue(from);
         browser.keys('Enter');
         browser.pause(2000);
    
         this.dest.click();
         browser.pause(2000);
         this.destPlace.setValue(to);
         browser.keys('Enter');
         browser.pause(2000);
    
         this.depDateBtn.click();
         browser.pause(2000);
         $(depDate).click();
         browser.pause(2000);
         $(retDate).click();
         browser.pause(2000);
    
         this.searchBtn.click();
         browser.pause(15000);
    }
    
    
    }
     export default new HomePage();