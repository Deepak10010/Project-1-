package steps;

import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarBrowsePageActions;
import pages.actions.CarsListPageActions;
import pages.actions.TradeMeHomePageActions;
import pages.actions.UsedCarsPageActions;
import utils.SeleniumDriver;

public class TestCase1_Steps {
	CarBrowsePageActions carbrowsepageactions = new CarBrowsePageActions();
	CarsListPageActions carslistpageactions = new CarsListPageActions();
	TradeMeHomePageActions trademehomepageactions = new TradeMeHomePageActions();
	UsedCarsPageActions usedcarspageactions = new UsedCarsPageActions();
	
	
	@Given("^I am on the Home Page \"([^\"]*)\"  of TradeMe website$")
	public void i_am_on_the_Home_Page_of_TradeMe_website(String websiteURL) throws Throwable {
		SeleniumDriver.openPage(websiteURL);
	}

	@When("^I move to Motors tab$")
	public void i_move_to_Motors_tab(DataTable arg1) throws Throwable {
	  
	}

	@And("^click on \"([^\"]*)\" tab$")
	public void click_on_tab(String arg1) throws Throwable {
		System.out.println("Click on Motors Tab");
		trademehomepageactions.ClickOnMotorsLink();
	}

	@And("^The Page Title should be \"([^\"]*)\"$")
	public void the_Page_Title_should_be(String expectedTitle) throws Throwable {
		System.out.println("Checking we are on the right page");
		String actual_title = SeleniumDriver.getDriver().getTitle();
	    Assert.assertEquals(actual_title,expectedTitle);
	}

	@And("^click on \"([^\"]*)\" link$")
	public void click_on_link(String arg1) throws Throwable {
		System.out.println("Click on Used Cars Link on Car Browse Page");
		carbrowsepageactions.ClickOnUsedCarsLink();
	}

	@And("^click the \"([^\"]*)\"link$")
	public void click_the_link(String arg1) throws Throwable {
		System.out.println("Click on the Featured Listings link");
		usedcarspageactions.ClickOnMoreLink();
	}

	@Then("^I should see Featured Listings Page$")
	public void i_should_see_Featured_Listings_Page() throws Throwable {
		System.out.println("Car list found");
		carslistpageactions.VerifyFeaturedListingsLink();
	}

	@Then("^I should see Used cars result$")
	public void i_should_see_Used_cars_result() throws Throwable {
		carslistpageactions.VerifyItemsFound();
	}
}
