import { chromium } from 'playwright';
import { resolve } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const html = resolve('design/forecode-v5/prototype.html');
const out = resolve('design/forecode-v5/browser-artifacts');
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const outcomes = [];

async function check(name, fn) {
  try { await fn(); outcomes.push({ name, status: 'PASS' }); console.log('PASS', name); }
  catch (error) { outcomes.push({ name, status: 'FAIL', reason: String(error?.stack || error) }); console.error('FAIL', name, error); }
}

async function open(width, height, reduced = false) {
  const page = await browser.newPage({
    viewport: { width, height },
    reducedMotion: reduced ? 'reduce' : 'no-preference',
  });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e?.stack || e)));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
  await page.goto(pathToFileURL(html).href);
  await page.waitForLoadState('domcontentloaded');
  return { page, errors };
}
const truthy = (value, text) => assert.ok(value, text);
const visible = async (page, locator) => truthy(await page.locator(locator).first().isVisible(), locator + ' not visible');
const on = async (page, view) => visible(page, '.work-view[data-view="' + view + '"].on');
const clickWork = async (page, view) => {
  await page.locator('.work-tab[data-work="' + view + '"]').click();
  await on(page, view);
};

await check('desktop landing / tournament CTA', async () => {
  const { page, errors } = await open(1440, 900);
  await visible(page, '#site.active');
  await visible(page, '#arena');
  await page.screenshot({ path: out + '/landing-desktop.png', fullPage: true });
  await page.locator('#arena [data-launch="experiment"]').click();
  await visible(page, '#app.active');
  await on(page, 'experiment');
  truthy((await page.locator('#v5VerdictTitle').innerText()).includes('not been run'), 'missing no-run verdict');
  await page.screenshot({ path: out + '/tournament-desktop.png', fullPage: true });
  assert.deepEqual(errors, []);
  await page.close();
});

await check('three-arm fictional tournament / trace inspection', async () => {
  const { page, errors } = await open(1440, 900);
  await page.locator('[data-launch="architecture"]').first().click();
  await clickWork(page, 'experiment');
  for (const id of ['armAStatus', 'armBStatus', 'armCStatus']) {
    assert.match(await page.locator('#' + id).innerText(), /NOT RUN/);
  }
  await page.locator('[data-results="sample"]').click();
  assert.match(await page.locator('#v5VerdictTitle').innerText(), /B and C tie/);
  await page.locator('[data-arm-focus="c"]').click();
  assert.match(await page.locator('#traceSelectedId').innerText(), /^C-01$/);
  assert.match(await page.locator('#armCStatus').innerText(), /SAMPLE/);
  await page.locator('[data-results="empty"]').click();
  assert.match(await page.locator('#v5VerdictLabel').innerText(), /NO MEASURED/);
  assert.deepEqual(errors, []);
  await page.close();
});

await check('time machine / all arm + stage combinations', async () => {
  const { page, errors } = await open(1440, 900);
  await page.locator('[data-launch="architecture"]').first().click();
  await clickWork(page, 'time');
  for (const arm of ['a', 'b', 'c']) {
    await page.locator('[data-tm-arm="' + arm + '"]').click();
    for (const phase of ['before', 'prepared', 'after']) {
      await page.locator('[data-tm-phase="' + phase + '"]').click();
      assert.match(await page.locator('#v5TimeState').innerText(), new RegExp(arm.toUpperCase() + ' / ' + phase.toUpperCase()));
      const newNode = await page.locator('.v5-graph-svg').evaluate(n => n.classList.contains('show-prepared'));
      assert.equal(newNode, arm !== 'a' && phase !== 'before');
    }
  }
  await page.locator('[data-tm-arm="b"]').click();
  await page.locator('[data-tm-phase="prepared"]').click();
  await page.screenshot({ path: out + '/time-machine-desktop.png', fullPage: true });
  assert.deepEqual(errors, []);
  await page.close();
});

await check('evidence previews / no real receipt claim', async () => {
  const { page, errors } = await open(1440, 900);
  await page.locator('[data-launch="architecture"]').first().click();
  await clickWork(page, 'evidence');
  assert.match(await page.locator('#certStatus').innerText(), /INSUFFICIENT/);
  await page.locator('[data-cert="good"]').click();
  assert.match(await page.locator('#certStatus').innerText(), /IN SAMPLE/);
  await page.locator('[data-cert="fail"]').click();
  assert.match(await page.locator('#certStatus').innerText(), /REJECTED/);
  await page.locator('[data-cert="empty"]').click();
  assert.match(await page.locator('#certStatus').innerText(), /INSUFFICIENT/);
  assert.deepEqual(errors, []);
  await page.close();
});

await check('keyboard command menu and navigation', async () => {
  const { page, errors } = await open(1440, 900);
  await page.locator('[data-launch="architecture"]').first().click();
  await page.keyboard.press('3');
  await on(page, 'time');
  await page.keyboard.press('4');
  await on(page, 'evidence');
  await page.keyboard.press('Control+k');
  await visible(page, '#commandLayer.open');
  await page.locator('#commandInput').fill('tournament');
  await page.locator('[data-command="experiment"]').click();
  await on(page, 'experiment');
  await page.keyboard.press('Control+k');
  await page.keyboard.press('Escape');
  truthy(!(await page.locator('#commandLayer').evaluate(el => el.classList.contains('open'))), 'command menu did not close');
  assert.deepEqual(errors, []);
  await page.close();
});

await check('mobile portrait layouts + reduced motion', async () => {
  const { page, errors } = await open(390, 844, true);
  await page.screenshot({ path: out + '/landing-mobile.png', fullPage: true });
  await page.locator('#site .nav-action').click();
  await page.screenshot({ path: out + '/architecture-mobile.png', fullPage: true });
  for (const view of ['experiment', 'time', 'evidence']) {
    await clickWork(page, view);
    await page.screenshot({ path: out + '/' + view + '-mobile.png', fullPage: true });
    const bounds = await page.evaluate(() => ({
      width: window.innerWidth,
      body: document.body.scrollWidth,
      doc: document.documentElement.scrollWidth
    }));
    truthy(bounds.doc <= bounds.width + 2, 'document overflows horizontally in ' + view + ': ' + JSON.stringify(bounds));
  }
  assert.deepEqual(errors, []);
  await page.close();
});
await browser.close();
console.log('\nSummary:', outcomes.length, 'checks;', outcomes.filter(o => o.status === 'PASS').length, 'passed');
if (outcomes.some(o => o.status !== 'PASS')) process.exitCode = 1;
