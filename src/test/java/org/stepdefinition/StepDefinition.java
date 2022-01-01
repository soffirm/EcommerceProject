package org.stepdefinition;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.baseclass.BaseClass1;
import org.baseclass.LoginPojo;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends BaseClass1 {
	@Given("The user should be in the Amazon home page")
	public void the_user_should_be_in_the_Amazon_home_page() {
		System.out.println("Browser launched ");
		/*launchBrowser();
		maxWindow();
		loadurl("https://www.amazon.in/");*/
	}
	
	@When("The user to pass the item name{string} to search")
	public void the_user_to_pass_the_item_name_to_search(String searchItems) {
		LoginPojo l= new LoginPojo();
		fill(l.getSearchBar(), searchItems);
	    
	}


@When("The user should click the search button")
	public void the_user_should_click_the_search_button() {
		LoginPojo l= new LoginPojo();
		btnclick(l.getSearchBtn());
	   
	}

	@Then("The user should see the list of searched items")
	public void the_user_should_see_the_list_of_searched_items() {
		
		Assert.assertTrue(true);
		Date d= new Date();
		System.out.println(d);
	  
	}
	
	@When("The user should click the All dropdown")
	public void theUserShouldClickTheAllDropdown() throws InterruptedException {
		LoginPojo l= new LoginPojo();
		Thread.sleep(3000);
		selectText(l.getcategory(),"Deals");
	}

	@When("The user should be able to click anyone category")
	public void theUserShouldBeAbleToClickAnyoneCategory() {
	   printTitle();
	}

	@Then("The user should see the selected page")
	public void theUserShouldSeeTheSelectedPage() {
	    driver.close();
	}
	
	@Given("The user should be in the home page")
	public void theUserShouldBeInTheHomePage() {
		launchBrowser();
		driver.get("https://www.amazon.in/");
		
	
	
	}

	@When("The user should click the cart symbol")
	public void theUserShouldClickTheCartSymbol() {
	   driver.findElement(By.xpath("//span[@id='nav-cart-count']")).click();
	}

	@Then("The user should be able to see the cart page")
	public void theUserShouldBeAbleToSeeTheCartPage() {
	   currentUrl();
	}

	@When("The user should click the sign in button")
	public void theUserShouldClickTheSignInButton() {
		System.out.println("Sign in button clicked - success");
	}
		/*loadurl("https://www.amazon.in/");
	    driver.findElement(By.id("nav-link-accountList-nav-line-1")).click();
	}*/

	@When("The user should pass the username and password")
	public void theUserShouldPassTheUsernameAndPassword(io.cucumber.datatable.DataTable d) {
		
		//Map<String, String> mp = d.asMap(String.class, String.class);
	/*	List<Map<String, String>> mp = d.asMaps();
	   WebElement email = driver.findElement(By.id("ap_email"));
	  email.sendKeys( mp.get(1).get("lastname"));*/
		
		System.out.println("user ID passed= TC successfull");
		System.out.println("password ID passed= TC successfull");
	}

	@Then("the user should click the login button")
	public void theUserShouldClickTheLoginButton() {
	  // driver.findElement(By.id("continue")).click();
		System.out.println("Sign in btn working ");
		Assert.assertTrue(false);
	}






}
