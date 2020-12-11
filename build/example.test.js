"use strict";

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _homepage = require("./homepage");

var _homepage2 = _interopRequireDefault(_homepage);

var _mochaSteps = require("mocha-steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Mocha steps test", function () {
    var browser = void 0,
        page = void 0;

    before(async function () {
        browser = await _puppeteer2.default.launch({ headless: false });
        page = await browser.newPage();
        await page.setDefaultTimeout(7000);
    });

    after(async function () {
        await browser.close();
    });

    (0, _mochaSteps.step)("should load homepage", async function () {
        // const browser = await puppeteer.launch({
        //     headless: false
        // });
        // const page = await browser.newPage();
        var homepage = new _homepage2.default(page);

        // await page.goto("http://zero.webappsecurity.com/index.html");
        // await page.waitFor(5000);
        await homepage.visit();
        // await browser.close();
    });

    (0, _mochaSteps.step)("step 2", async function () {
        await page.waitForSelector("#FAIL");
    });

    (0, _mochaSteps.step)("step e", async function () {
        await page.waitForSelector("#FAIL");
    });
}); // const puppeteer = require("puppeteer")