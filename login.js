import { Page, launch } from "puppeteer";

// in our out
async function automationFunction(type, username, password) {
  const browser = await launch({ headless: false });

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

export { clockIn, clockOut };
