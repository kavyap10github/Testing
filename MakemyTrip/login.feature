Feature: Make my Trip Login

Scenario: Login through make my trip and verify homepage

Given I am on the make my trip homepage
When I login with username <username> and password <password> 
Then It will show <message>

Examples:
|           username           | |    password       | |   message    |
|mohankavyaunofficial@gmail.com| |Kavya123@makemytrip| | Hi Traveller |  
# |mohankavyaunofficial@gmail.com| |    jhcgs@14       |
# |      vcjdcgj@gmail.com       | |     jhcgs@14      |