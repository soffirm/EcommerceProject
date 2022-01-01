package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
import org.utilities.*;
@RunWith(Cucumber.class)

@CucumberOptions(features="src\\test\\resources", glue="org.stepdefinition", dryRun= false,
snippets= SnippetType.CAMELCASE, strict= false, 
 plugin= {"html:target", "junit:JunitReport\\cart.xml", "json:JsonReport\\cart.json", 
		 "rerun:src\\test\\resources\\Rerun\\failed.txt" }
)
public class TestRunnerClass {
	
	@AfterClass
	public static void Jvmreport() {
		
		JvmReport.generateJvmReport("C:\\Users\\USER\\eclipse-workspace\\ProjectCucumber\\JsonReport\\cart.json");

	}
	


}