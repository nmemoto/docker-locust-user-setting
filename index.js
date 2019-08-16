const puppeteer = require('puppeteer');
const process = require('process');

const uri = process.argv[2];
const userNum = process.argv[3];
const hatchRate = process.argv[4];

(async () => {
  try {
    const browser = await puppeteer.launch({
      //headless: false,
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(uri);

    if ((await page.$('.edit_test')) !== null) {
      await page.type('#new_locust_count', userNum);
      await page.type('#new_hatch_rate', hatchRate);
    } else {
      await page.type('#locust_count', userNum);
      await page.type('#hatch_rate', hatchRate);
    }
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
})();
