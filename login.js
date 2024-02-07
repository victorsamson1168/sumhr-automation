import { Page, launch } from "puppeteer";
import fs from "fs";

// in our out
async function automationFunction(type, username, password) {
  const browser = await launch({ headless: true });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 720 });

  await page.goto("https://mckinley.sumhr.io/", { waitUntil: "networkidle0" });

  console.log("Waiting");
  await page.type("#email", username);
  await page.type("#password", password);
  await page.click(".MuiButton-root");
  await page.waitForNavigation();
  await page.waitForTimeout(1000);
  await pressButton(page, type);
  console.log("LOGGED IN");
}

/**
 * @param {Page} page The date
 * @param {string} type The string
 */
const pressButton = async (page, type) => {
  const className = "";
  switch (type) {
    case "in":
      className = ".punch-in";
      break;
    case "out":
      className = ".punch-out";
      break;

    default:
      break;
  }
  const buttonParent = await page.$(className);
  if (buttonParent) {
    const clockInOutButton = await buttonParent.$("button");
    await clockInOutButton.click();
    console.log("clocked" + type);
  }
};

const clockIn = (username, password) => {
  automationFunction("in", username, password);
};

const clockOut = (username, password) => {
  automationFunction("out", username, password);
};

const test = async () => {
  const browser = await launch({
    headless: false,
    executablePath:
      "/home/ec2-user/.cache/puppeteer/chrome/linux-121.0.6167.85/chrome-linux64/chrome",
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 720 });

  await page.goto("https://mckinley.sumhr.io/", { waitUntil: "networkidle0" });

  console.log("Waiting");
  await page.type("#email", "pulkit.guglani@mckinleyrice.co");
  await page.type("#password", "Chawal.com8125");
  await page.click(".MuiButton-root");
  await page.waitForNavigation();
  await page.waitForTimeout(1000);

  console.log("LOGGED IN");
  await page.waitForTimeout(6000);

  // Extract and print data from element with class "thin-scroll MuiPaper-root"
  const elementData = await page.evaluate(() => {
    console.log("document", document);
    console.log("document", document.getElementsByTagName("body"));

    console.log(page.url);

    const element = document.querySelector(".thin-scroll.MuiPaper-root");
    if (element) {
      return element.textContent.trim();
    } else {
      return "Element not found";
    }
  });

  console.log("Element Data:", elementData);
  saveFile(elementData);
};

const saveFile = (dataToSave) => {
  // Sample data to be saved

  // File path where the data will be saved
  const filePath = "data.txt";

  // Writing data to the file
  fs.writeFile(filePath, dataToSave, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data saved successfully to", filePath);
    }
  });
};

test();

export { clockIn, clockOut, test };
