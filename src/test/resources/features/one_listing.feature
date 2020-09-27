@usedcars-page
Feature: Acceptance testing to validate there exists at least one listing in the TradeMe UsedCars category

  @used-cars-Positive
  Scenario: At least one listing exists in TradeMe Used Cars category
    Given I am on the Home Page "https://www.tmsandbox.co.nz/"  of TradeMe website
    When I move to Motors tab
      | Marketplace |
      | Jobs        |
      | Motors      |
      | Property    |
    And click on "Motors" tab
    And The Page Title should be "TRADEME SANDBOX - Buy online and sell with NZ's #1 auction & classifieds site | Trade Me SANDBOX"
    And click on "Used cars" link
    And click the "more..."link
    Then I should see Featured Listings Page
    And I should see Used cars result
