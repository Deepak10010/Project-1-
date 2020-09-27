package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarsListPageLocators {
	@FindBy(how=How.XPATH, using = "//li[contains(text(),'Featured listings')]")
	public WebElement Featured_listings_link;
	
	@FindBy(how=How.XPATH, using = "//div[@class='tmm-search-card-list-view__title tmm-search-card-list-view__title--bold']")
	public WebElement Cars_List_Result;
}
