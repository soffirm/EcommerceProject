package org.baseclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPojo extends BaseClass1{
	
public LoginPojo() {
		
		PageFactory.initElements(driver,this);
	}
	
@FindBy(xpath="//input[@id='twotabsearchtextbox']")
	private WebElement searchBar;
	
	
@FindBy(id= "nav-search-submit-button")
	private WebElement searchBtn;



@FindBy(id= "//select[@name='url']")
private WebElement category;


public WebElement getSearchBar() {
	return searchBar;
}

public WebElement getSearchBtn() {
	return searchBtn;
}

public WebElement getcategory() {
	return category;
}

	
	

}
