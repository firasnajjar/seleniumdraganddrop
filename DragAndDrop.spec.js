/**
 * Created by Firas Najjar on 14/07/2015.
 */
/**
 * Created by I300494 on 09/07/2015.
 */
'use strict';

var webdriver = require('selenium-webdriver'),
    test = require('selenium-webdriver/testing');

global.$ = require('jQuery');//Global variable

var By = webdriver.By,
    until = webdriver.until;

var url = "http://the-internet.herokuapp.com/drag_and_drop";

describe('The drag and drop capability', function () {
    this.timeout(100000);
    var driver;

    test.before(function () {
        var caps = webdriver.Capabilities.chrome();
        driver = new webdriver.Builder().withCapabilities(caps).build();
        return driver.get(url);
    });

    test.after(function (done) {
        return driver.quit().then(function() {
            done();
        });
    });

    //test.xit(
    //    'drag A and drop it on B',
    //    function (done) {
    //        driver.wait(until.elementLocated(By.js('return $("header:contains(\'A\')")[0]')), 5000).then(function(elementA) {
    //               return driver.wait(until.elementLocated(By.js('return $("header:contains(\'B\')")[0]')), 5000).then(function(elementB) {
    //                   return elementA.getInnerHtml().then(function(innerHtmlA) {
    //                       var actionSequence =  new webdriver.ActionSequence(driver);
    //                       return actionSequence.dragAndDrop(elementA, elementB).perform().then(function() {
    //                           done();
    //                       });
    //                   })
    //
    //               });
    //        });
    //    }
    //);


    test.it(
        'drag A and drop it on B',
        function (done) {
            driver.wait(until.elementLocated(By.css('.column[id="column-b"]')), 5000).then(function(elementA) {
                return driver.wait(until.elementLocated(By.css('.column[id="column-a"]')), 5000).then(function(elementB) {
                    return elementA.getInnerHtml().then(function(innerHtmlA) {
                        var actionSequence =  new webdriver.ActionSequence(driver);
                        return actionSequence.dragAndDrop(elementA, elementB).perform().then(function() {
                            driver.sleep(10*1000);
                            done();
                        });
                    })

                });
            });
        }
    );

});
