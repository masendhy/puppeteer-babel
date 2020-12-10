// const puppeteer = require("puppeteer")
import puppeteer from "puppeteer";
import Homepage from "./homepage";


describe("load the URL", () => {
    it("should work", async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        const homepage = new Homepage(page);
        // await page.goto("http://zero.webappsecurity.com/index.html");
        // await page.waitFor(5000);
        await homepage.visit();
        await browser.close();
    });
});