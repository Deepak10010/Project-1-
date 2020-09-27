package pages.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarsListPageLocators;
import utils.SeleniumDriver;

public class CarsListPageActions {

	CarsListPageLocators carslistpagelocators = null;
	
	
	public CarsListPageActions() {
		this.carslistpagelocators = new CarsListPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carslistpagelocators);
	}
	
	public void VerifyFeaturedListingsLink() {
		carslistpagelocators.Featured_listings_link.isDisplayed();
		System.out.println("I am on Featured Listings Page");
	}
	
	public void VerifyItemsFound() {
		String result = carslistpagelocators.Cars_List_Result.getText();
		System.out.println("Result : " + result);
		}
	}

