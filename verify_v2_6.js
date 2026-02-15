const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.click('text=Provisioning');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/v2_6_final.png', fullPage: true });
  await browser.close();
})();
