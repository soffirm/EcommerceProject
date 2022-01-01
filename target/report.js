$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Amazon.feature");
formatter.feature({
  "name": "To validate the cart functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenario({
  "name": "To validate the cart functionality by clicking it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.theUserShouldBeInTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click the cart symbol",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.theUserShouldClickTheCartSymbol()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be able to see the cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.theUserShouldBeAbleToSeeTheCartPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Project.feature");
formatter.feature({
  "name": "",
  "description": "To validate the search bar functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@searchbar"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "To validate the search bar functionality by passing item name",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user to pass the item name\"\u003csearchItems\u003e\" to search",
  "keyword": "When "
});
formatter.step({
  "name": "The user should click the search button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the list of searched items",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchItems"
      ]
    },
    {
      "cells": [
        "Redmi"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The user should be in the Amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_should_be_in_the_Amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To validate the search bar functionality by passing item name",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchbar"
    }
  ]
});
formatter.step({
  "name": "The user to pass the item name\"Redmi\" to search",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_to_pass_the_item_name_to_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_should_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the list of searched items",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_should_see_the_list_of_searched_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The user should be in the Amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_should_be_in_the_Amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TO validate the select option in All Category",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchbar"
    }
  ]
});
formatter.step({
  "name": "The user should click the All dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.theUserShouldClickTheAllDropdown()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#\\/\\/select\\[\\@name\\\u003d\\\u0027url\\\u0027\\]\"}\n  (Session info: chrome\u003d96.0.4664.45)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-DVG3K29\u0027, ip: \u0027192.168.10.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e790af2b97de2e79602c090abe94623e\n*** Element info: {Using\u003did, value\u003d//select[@name\u003d\u0027url\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat org.baseclass.BaseClass1.selectText(BaseClass1.java:145)\r\n\tat org.stepdefinition.StepDefinition.theUserShouldClickTheAllDropdown(StepDefinition.java:54)\r\n\tat ✽.The user should click the All dropdown(file:src/test/resources/Project.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should be able to click anyone category",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.theUserShouldBeAbleToClickAnyoneCategory()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the selected page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.theUserShouldSeeTheSelectedPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The user should be in the Amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_should_be_in_the_Amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The validate the login functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchbar"
    }
  ]
});
formatter.step({
  "name": "The user should click the sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.theUserShouldClickTheSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should pass the username and password",
  "rows": [
    {
      "cells": [
        "name",
        "lastname"
      ]
    },
    {
      "cells": [
        "klaus",
        "Mickelson"
      ]
    },
    {
      "cells": [
        "Elijah",
        "Haely"
      ]
    },
    {
      "cells": [
        "stefan",
        "salvatore"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.theUserShouldPassTheUsernameAndPassword(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.theUserShouldClickTheLoginButton()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat org.stepdefinition.StepDefinition.theUserShouldClickTheLoginButton(StepDefinition.java:107)\r\n\tat ✽.the user should click the login button(file:src/test/resources/Project.feature:37)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});