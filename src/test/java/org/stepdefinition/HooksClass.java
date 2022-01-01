package org.stepdefinition;

import java.io.IOException;

import org.baseclass.BaseClass1;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class HooksClass extends BaseClass1 {
	
	@Before(value="@amazon")
	public static void launchBrowser() {
		
	System.out.println("Browser launched");
		
	}
	
//	@Before
//	private void beforeScenario() {
//		System.out.println("Scenario starts");
//	}
//	
//	
	@After
	public void afterScenario(Scenario s) throws IOException {
		
		System.out.println("closed");
		String name = s.getName();
		String fileName = name.replace(" ", "_");
		screenshot(fileName);
		if (s.isFailed()) {
			
			TakesScreenshot tk= (TakesScreenshot)driver;
			byte[] sc =	 tk.getScreenshotAs(OutputType.BYTES);
			s.embed(sc, "image/png");
			
			System.out.println("Failed Scenario"+ s.getName());
			
			
		
			
		}
		

	}}

	

