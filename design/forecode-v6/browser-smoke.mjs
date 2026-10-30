import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const input = resolve('design/forecode-v6/prototype.html');
const screenshots = resolve('design/forecode-v6/browser-artifacts');
await mkdir(screenshots, { recursive: true });
const browser = await chromium.launch({ headless: true });
let failures = 0;
async function test(name, fn) {
  try { await fn(); console.log('PASS', name); }
  catch (error) { failures++; console.error('FAIL', name, error); }
}
async function pageAt(width, height, reduced = false) {
  const page = await browser.newPage({viewport:{width,height}, reducedMotion: reduced ? 'reduce':'no-preference'});
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto(pathToFileURL(input).href);
  return {page,errors};
}
async function clickView(page, view) {
  await page.locator('.chapters [data-go="'+view+'"]').click();
  assert.equal(await page.locator('.view[data-view="'+view+'"]').isVisible(),true);
  assert.equal(await page.locator('.chapters [data-go="'+view+'"]').getAttribute('aria-current'),'step');
}
async function noDocumentOverflow(page, where) {
  const widths = await page.evaluate(() => ({
    viewport:innerWidth,body:document.body.scrollWidth,root:document.documentElement.scrollWidth
  }));
  assert.ok(widths.root<=widths.viewport+2,where+' horizontal overflow: '+JSON.stringify(widths));
}
await test('All six chapters connected and no run truth preserved',async()=>{
  const {page,errors}=await pageAt(1440,900);
  assert.match(await page.locator('.notice').innerText(),/DESIGN SPECIMEN/);
  await page.screenshot({path:screenshots+'/01-case-desktop.png',fullPage:true});
  for(const view of ['lab','tournament','time','evidence','report']) {
    await clickView(page,view);
    await noDocumentOverflow(page,view);
    if(view==='tournament') {
      assert.match(await page.locator('.view[data-view="tournament"]').innerText(),/NOT RUN/);
      await page.screenshot({path:screenshots+'/03-tournament-desktop.png',fullPage:true});
    }
    if(view==='report') {
      assert.equal(await page.locator('#report-headline').innerText(),'Insufficient evidence to choose');
      await page.screenshot({path:screenshots+'/06-report-desktop.png',fullPage:true});
    }
  }
  assert.deepEqual(errors,[]); await page.close();
});
await test('Architecture focus and source phases are available without invented snapshots',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await clickView(page,'lab');
  await page.locator('.view[data-view="lab"] [data-arm="B"]').click();
  assert.match(await page.locator('#lab-choice').innerText(),/B/);
  await page.screenshot({path:screenshots+'/02-lab-desktop.png',fullPage:true});
  await clickView(page,'time');
  for(const arm of ['A','B']) {
    await page.locator('.view[data-view="time"] [data-arm="'+arm+'"]').click();
    for(const phase of ['before','prepared','after']) {
      await page.locator('[data-stage="'+phase+'"]').click();
      assert.equal(await page.locator('[data-stage="'+phase+'"]').getAttribute('aria-pressed'),'true');
      assert.match(await page.locator('#phase-detail').innerText(),/authentic|source|tree|prepared|proposed|baseline|final/i);
      assert.match(await page.locator('.view[data-view="time"]').innerText(),/Unavailable/i);
    }
  }
  await page.screenshot({path:screenshots+'/04-time-desktop.png',fullPage:true});
  assert.deepEqual(errors,[]); await page.close();
});
await test('Every illustrative decision mode stays explicitly fictional with neutral editorial layout',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await clickView(page,'report');
  const expected={
    unknown:/Insufficient evidence/,
    keep:/Keep the current architecture/,
    refactor:/Refactor before/,
    tie:/Insufficient evidence/,
    fail:/Insufficient evidence/,
    invalid:/Insufficient evidence/
  };
  for(const [mode,headline] of Object.entries(expected)){
    await page.locator('[data-mode="'+mode+'"]').click();
    assert.match(await page.locator('#report-headline').innerText(),headline);
    assert.match(await page.locator('.paper-sample').innerText(),/FICTIONAL/);
    assert.match(await page.locator('#report-lead').innerText(),/fictional|hypothetical|authenticated matched|comparison|compared trials/i);
    if(mode==='keep'||mode==='refactor') await page.screenshot({path:screenshots+'/06-'+mode+'-desktop.png',fullPage:true});
  }
  assert.deepEqual(errors,[]); await page.close();
});
await test('390px and 768px widths, reduced motion, semantic controls',async()=>{
  for(const width of [390,768]){
    const {page,errors}=await pageAt(width,844,true);
    assert.equal(await page.emulateMedia({reducedMotion:'reduce'}),undefined);
    for(const view of ['case','lab','tournament','time','evidence','report']){
      if(view!=='case') await clickView(page,view);
      await noDocumentOverflow(page,width+' / '+view);
      if(view==='time'){
        const s=page.locator('.view[data-view="time"] .trace-scroll');
        const size=await s.evaluate(e=>({client:e.clientWidth,scroll:e.scrollWidth}));
        if(width===390) {
          assert.ok(size.scroll>size.client+100,'390px graph scroller must scroll: '+JSON.stringify(size));
          await s.evaluate(e=>{e.scrollLeft=200});
          assert.ok(await s.evaluate(e=>e.scrollLeft)>0);
        }
      }
      if(width===390&&(view==='case'||view==='report')) await page.screenshot({path:screenshots+'/'+view+'-mobile.png',fullPage:true});
    }
    assert.deepEqual(errors,[]);await page.close();
  }
});
await test('Deep links land at requested view and keyboard chapter control works',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await page.goto(pathToFileURL(input).href+'#report');
  assert.equal(await page.locator('.view[data-view="report"]').isVisible(),true);
  await page.locator('.chapters [data-go="lab"]').focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('.view[data-view="lab"]').isVisible(),true);
  assert.deepEqual(errors,[]);await page.close();
});
await browser.close();
console.log('Browser checks failed:',failures);
if(failures)process.exitCode=1;
