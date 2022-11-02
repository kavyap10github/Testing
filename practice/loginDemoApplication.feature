Feature: Performing a login

        Background:
            Given I am on the login page

        Scenario: Login with a default user
             When I log in with a default user
             Then I shall be on the login success page