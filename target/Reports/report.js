$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Dems.feature");
formatter.feature({
  "name": "Create a single trip in employee login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "Open a chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Launch the DEMS website",
  "keyword": "And "
});
formatter.step({
  "name": "I entered the valid username \u003cUname\u003e and password \u003cPW\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Uname",
        "PW"
      ]
    },
    {
      "cells": [
        "\"07246\"",
        "\"Test@123\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "Open a chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.open_a_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch the DEMS website",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.launch_the_DEMS_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I entered the valid username \"07246\" and password \"Test@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.i_entered_the_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To add new trip",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addtrip"
    }
  ]
});
formatter.step({
  "name": "Click on Add new button",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the Purpose \u003cPurpose\u003e of trip",
  "keyword": "And "
});
formatter.step({
  "name": "Select the Start date and End Date",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the Description \u003cDescription\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Select the trip type",
  "keyword": "When "
});
formatter.step({
  "name": "Select from and To city",
  "keyword": "Then "
});
formatter.step({
  "name": "Select the travel mode \u003cTravel_mode\u003e and trip type \u003cTrip_type\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click on trip save button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Purpose",
        "Description",
        "Travel_mode",
        "Trip_type"
      ]
    },
    {
      "cells": [
        "\"Client Meeting\"",
        "\"Test\"",
        "\"bus\"",
        "\"overnight\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "To add new trip",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@addtrip"
    }
  ]
});
formatter.step({
  "name": "Click on Add new button",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.click_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Purpose \"Client Meeting\" of trip",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.enter_the_Purpose_of_trip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the Start date and End Date",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.select_the_Start_date_and_End_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Description \"Test\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.enter_the_Description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the trip type",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.select_the_trip_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select from and To city",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.select_from_and_To_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the travel mode \"bus\" and trip type \"overnight\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.select_the_travel_mode_and_trip_type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on trip save button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.click_on_trip_save_button()"
});
formatter.result({
  "status": "passed"
});
});