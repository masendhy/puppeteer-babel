// const puppeteer = require("puppeteer")
import puppeteer from "puppeteer";
import Homepage from "./homepage";
import { step, steps } from "mocha-steps";


describe("Mocha steps test", () => {
let browser, page ;

before (async () =>{
    browser = await puppeteer.launch({ headless : false});
    page = await browser.newPage();
    await page.setDefaultTimeout(7000);
});

after (async () => {
    await browser.close();
});

    step("should load homepage", async () => {
        // const browser = await puppeteer.launch({
        //     headless: false
        // });
        // const page = await browser.newPage();
        const homepage = new Homepage(page);

        // await page.goto("http://zero.webappsecurity.com/index.html");
        // await page.waitFor(5000);
        await homepage.visit();
        // await browser.close();
    });

    step("step 2", async()=> {
        await page.waitForSelector("#FAIL");
    });

    step("step e", async ()=>{
        await page.waitForSelector("#FAIL");
});
});