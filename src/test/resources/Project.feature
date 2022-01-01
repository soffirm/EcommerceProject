@searchbar
Feature: 
To validate the search bar functionality
Background:
Given The user should be in the Amazon home page

Scenario Outline: 
To validate the search bar functionality by passing item name
When The user to pass the item name"<searchItems>" to search
And The user should click the search button
Then The user should see the list of searched items


Examples:
|searchItems|
|Redmi|
#|Table|
#|Speaker|



Scenario: TO validate the select option in All Category
When The user should click the All dropdown
And The user should be able to click anyone category
Then The user should see the selected page




Scenario: The validate the login functionality
When The user should click the sign in button
And The user should pass the username and password 
|name|lastname|
|klaus|Mickelson|
|Elijah|Haely|
|stefan|salvatore|
Then the user should click the login button
