// const CREDS = require('./creds');

const { pass } = require('./pass');

async function main() {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 720 })
    console.log("Waiting 1");

    await page.goto('https://mckinley.sumhr.io/', { waitUntil: 'networkidle0' });

    console.log("Waiting");
    await page.type('#email', "pulkit.guglani@mckinleyrice.co");
    await page.type('#password', pass);
    await page.click(".MuiButton-root")
    await page.waitForNavigation();

    console.log("LOGGED IN");


    // await page.click(".MuiButton-containedPrimary")





}
main();
//   await page.type('#loginPw', CREDS.password);
//   await page.click('#gNO89b');


module.exports = { main }
