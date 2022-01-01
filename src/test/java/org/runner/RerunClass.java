package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="@C:\\Users\\USER\\eclipse-workspace\\ProjectCucumber\\src\\test\\resources\\Rerun\\failed.txt",
glue="org.stepdefinition")

public class RerunClass {
	

}
