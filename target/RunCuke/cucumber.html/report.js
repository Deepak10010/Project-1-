$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("one_listing.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate there exists at least one listing in the TradeMe UsedCars category",
  "description": "",
  "id": "acceptance-testing-to-validate-there-exists-at-least-one-listing-in-the-trademe-usedcars-category",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@usedcars-page"
    }
  ]
});
formatter.before({
  "duration": 5803605400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "At least one listing exists in TradeMe Used Cars category",
  "description": "",
  "id": "acceptance-testing-to-validate-there-exists-at-least-one-listing-in-the-trademe-usedcars-category;at-least-one-listing-exists-in-trademe-used-cars-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@used-cars-Positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page \"https://www.tmsandbox.co.nz/\"  of TradeMe website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I move to Motors tab",
  "rows": [
    {
      "cells": [
        "Marketplace"
      ],
      "line": 8
    },
    {
      "cells": [
        "Jobs"
      ],
      "line": 9
    },
    {
      "cells": [
        "Motors"
      ],
      "line": 10
    },
    {
      "cells": [
        "Property"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on \"Motors\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The Page Title should be \"TRADEME SANDBOX - Buy online and sell with NZ\u0027s #1 auction \u0026 classifieds site | Trade Me SANDBOX\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"Used cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click the \"more...\"link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see Featured Listings Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see Used cars result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.tmsandbox.co.nz/",
      "offset": 23
    }
  ],
  "location": "TestCase1_Steps.i_am_on_the_Home_Page_of_TradeMe_website(String)"
});
formatter.result({
  "duration": 3944958000,
  "status": "passed"
});
formatter.match({
  "location": "TestCase1_Steps.i_move_to_Motors_tab(DataTable)"
});
formatter.result({
  "duration": 1579500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Motors",
      "offset": 10
    }
  ],
  "location": "TestCase1_Steps.click_on_tab(String)"
});
formatter.result({
  "duration": 133070400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TRADEME SANDBOX - Buy online and sell with NZ\u0027s #1 auction \u0026 classifieds site | Trade Me SANDBOX",
      "offset": 26
    }
  ],
  "location": "TestCase1_Steps.the_Page_Title_should_be(String)"
});
formatter.result({
  "duration": 9099200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used cars",
      "offset": 10
    }
  ],
  "location": "TestCase1_Steps.click_on_link(String)"
});
formatter.result({
  "duration": 2320050600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more...",
      "offset": 11
    }
  ],
  "location": "TestCase1_Steps.click_the_link(String)"
});
formatter.result({
  "duration": 1066382800,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d85.0.4183.121)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027DESKTOP-C0BI861\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\Deepak\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 85.0.4183.121, webStorageEnabled: true}\nSession ID: 94c20ea8ec69f4a86ec29706f51b3a19\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat pages.actions.UsedCarsPageActions.ClickOnMoreLink(UsedCarsPageActions.java:18)\r\n\tat steps.TestCase1_Steps.click_the_link(TestCase1_Steps.java:56)\r\n\tat ✽.And click the \"more...\"link(one_listing.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestCase1_Steps.i_should_see_Featured_Listings_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCase1_Steps.i_should_see_Used_cars_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5736569800,
  "status": "passed"
});
});