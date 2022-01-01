package org.data;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class PojoClass extends BaseClass1 {
	
public PojoClass() {
		
		PageFactory.initElements(driver,this);
	}
	
@FindBy(xpath="//input[@id='twotabsearchtextbox']")
	private WebElement searchBar;
	
	
@FindBy(id= "nav-search-submit-button")
	private WebElement searchBtn;
	
public WebElement getsearchBar() {
	return searchBar;
	
	
	public WebElement getsearchBtn() {
		return searchBtn;
		
	
}

}
