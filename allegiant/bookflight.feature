Feature: Book a flight in allegiant for round trip

Scenario: open allegiant website and book a flight from BLI to LAS

Given I am on the allegiant homepage

When I enter the destination details <from> and <to> and <depDate> and <retDate>

Then It will go to flight details page
Then I continue with the given flights
Then I go to bundle selection page
Then I do not select any bundle
Then I go to traveller details page
Then I enter traveller details and continue
Then I go to seat selection page
Then I select departing seat <depSeat> and returning seat <retSeat> and continue
Then I go to bag page
Then I continue with the included package only
Then I go to hotel page
Then I select a hotel <hotelName> and <roomNo> and continue
Then I go to car page
Then I continue with selecting car
Then I go to payment page
Then I enter payment information
Then I get the confirmation page

Examples:
    |              from                    |            to            |          depDate                                      |           retDate                                     |                         depSeat                      |                     retSeat                            |                                                  hotelName                                            |                                                      roomNo                                                                    |
    | Bellingham, WA / Vancouver, BC (BLI) |  Las Vegas, NV (LAS)     | //button[@aria-label='Thursday, November 10th 2022']  |  //button[@aria-label='Thursday, November 17th 2022'] |//*[@data-hook="select-economy-seat_unrestricted_20B"]| //*[@data-hook="select-economy-seat_unrestricted_20B"] |  //*[@data-hook="hotels-page-featured-hotel-card_the-cosmopolitan-of-las-vegas_hotel-details-button"] |  //*[@data-hook='room-pod_0']//*[@class='Button__StyledButton-sc-1ececxa-1 UfjrT PodPricing__HotelCardButton-sq53do-1 dlILob'] |
    # | Bellingham, WA / Vancouver, BC (BLI) |  Las Vegas, NV (LAS)     | //button[@aria-label='Friday, November 25th 2022']  |  //button[@aria-label='Monday, November 28th 2022'] |//*[@data-hook="select-economy-seat_unrestricted_20B"]| //*[@data-hook="select-economy-seat_unrestricted_20B"] |  //*[@data-hook="hotels-page-featured-hotel-card_the-cosmopolitan-of-las-vegas_hotel-details-button"] |  //*[@data-hook='room-pod_0']//*[@class='Button__StyledButton-sc-1ececxa-1 UfjrT PodPricing__HotelCardButton-sq53do-1 dlILob'] |



Scenario: open allegiant website and book a flight from LAS to OKC

Given I am on the allegiant homepage

When I enter the destination details <from> and <to> and <depDate> and <retDate>

Then It will go to flight details page
Then I continue with the given flights
Then I go to bundle selection page
Then I do not select any bundle
Then I go to traveller details page
Then I enter traveller details and continue
Then I go to seat selection page
Then I select departing seat <depSeat> and returning seat <retSeat> and continue
Then I go to bag page
Then I continue with the included package only
Then I go to car page
Then I continue with selecting car
Then I go to payment page
Then I enter payment information
Then I get the confirmation page

Examples:
    |              from                    |            to            |          depDate                                      |           retDate                                     |                         depSeat                      |                     retSeat                            |        
    |          Las Vegas, NV (LAS)         | Oklahoma City, OK (OKC)  | //button[@aria-label='Thursday, November 10th 2022']  |  //button[@aria-label='Thursday, November 17th 2022'] |//*[@data-hook="select-economy-seat_unrestricted_20B"]| //*[@data-hook="select-economy-seat_unrestricted_20B"] |   
    # |          Las Vegas, NV (LAS)         | Oklahoma City, OK (OKC)  | //button[@aria-label='Tuesday, November 22nd 2022']    |  //button[@aria-label='Saturday, November 26th 2022']   |//*[@data-hook="select-economy-seat_unrestricted_20A"]| //*[@data-hook="select-economy-seat_unrestricted_20A"] |   