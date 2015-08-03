/**
 * Created by Firas Najjar on 14/07/2015.
 */
'use strict';

var webdriver = require('selenium-webdriver');


var By = webdriver.By,
    until = webdriver.until;

var url = "http://the-internet.herokuapp.com/drag_and_drop";

describe('The drag and drop capability', function () {
    this.timeout(100000);
    var driver;

    before(function () {
        var caps = webdriver.Capabilities.chrome();
        driver = new webdriver.Builder().withCapabilities(caps).build();
        return driver.get(url);
    });

    after(function (done) {
        return driver.quit().then(function () {
            done();
        });
    });

    it('drag A and drop it on B',function (done) {
        driver.wait(until.elementLocated(By.css('.column[id="column-b"]')), 5000).then(function (elementA) {
            return driver.wait(until.elementLocated(By.css('.column[id="column-a"]')), 5000).then(function (elementB) {
                var actionSequence = new webdriver.ActionSequence(driver);
                return actionSequence.dragAndDrop(elementA, elementB).perform().then(function () {
                    done();
                });
            });
        });
    });

});
