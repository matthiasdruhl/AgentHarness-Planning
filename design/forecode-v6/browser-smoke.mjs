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
      assert.match(await page.locator('.view[data-view="tournament"] .tournament-study-status').innerText(),/NO AUTHENTIC PAIRED RESULTS/);
      assert.match(await page.locator('.view[data-view="tournament"] .ledger').innerText(),/Not run/);
      await page.screenshot({path:screenshots+'/03-tournament-desktop.png',fullPage:true});
    }
    if(view==='report') {
      assert.equal(await page.locator('#report-headline').innerText(),'Insufficient evidence to choose');
      await page.screenshot({path:screenshots+'/06-report-desktop.png',fullPage:true});
    }
  }
  assert.deepEqual(errors,[]); await page.close();
});
await test('Landing alternatives open the same architecture context with no invented result',async()=>{
  const {page,errors}=await pageAt(1440,900);
  const caseView=page.locator('.view[data-view="case"]');
  const alternatives=caseView.locator('.choice-preview-options');
  assert.equal(await alternatives.locator('button').count(),2);
  await alternatives.locator('[data-open-arm="B"]').click();
  assert.equal(await page.locator('.view[data-view="lab"]').isVisible(),true);
  assert.match(await page.locator('#lab-choice').innerText(),/B \/ Proposed boundary/);
  assert.match(await page.locator('.view[data-view="lab"] [data-trace-focus]').innerText(),/B · Routes/);
  assert.match(await page.locator('#trace-context').innerText(),/No verified study/);
  await clickView(page,'case');
  await alternatives.locator('[data-open-arm="A"]').focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('.view[data-view="lab"]').isVisible(),true);
  assert.match(await page.locator('#lab-choice').innerText(),/A \/ Status quo/);
  await clickView(page,'tournament');
  assert.equal(await page.locator('.tournament-conditions>div').count(),3);
  assert.match(await page.locator('.tournament-study-status').innerText(),/NO AUTHENTIC PAIRED RESULTS/);
  assert.match(await page.locator('.tournament-approaches').innerText(),/A \/ RETAIN/);
  assert.match(await page.locator('.tournament-approaches').innerText(),/B \/ PREPARE/);
  assert.match(await page.locator('svg[data-trace="tournament"]').getAttribute('aria-label'),/neither has a result/);
  assert.deepEqual(errors,[]); await page.close();
});
await test('Landing decision hinge and Tournament remain usable at 390px and 768px',async()=>{
  for(const width of [390,768]){
    const {page,errors}=await pageAt(width,844,true);
    await noDocumentOverflow(page,width+' landing choice');
    await page.locator('.view[data-view="case"] [data-open-arm="B"]').click();
    await noDocumentOverflow(page,width+' focused lab');
    await clickView(page,'tournament');
    await noDocumentOverflow(page,width+' study conditions');
    await page.getByRole('button',{name:'Inspect comparability requirements'}).click();
    await noDocumentOverflow(page,width+' evidence focus');
    assert.match(await page.locator('#evidence-focus-title').innerText(),/COMPARABILITY/);
    assert.deepEqual(errors,[]); await page.close();
  }
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
await test('Calm Change Trace supports mouse and keyboard inspection across chapters',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await clickView(page,'lab');
  const graph=page.locator('.view[data-view="lab"] svg[data-trace="lab"]');
  assert.equal(await graph.locator('[data-trace-node]').count(),8);
  assert.equal(await graph.locator('.pulse').count(),0,'No animated pseudo-execution pulse');
  await graph.locator('[data-trace-node="B:2"]').focus();
  await page.keyboard.press('Enter');
  assert.match(await page.locator('.view[data-view="lab"] [data-trace-focus]').innerText(),/B · Policy/);
  assert.match(await page.locator('#trace-context').innerText(),/B \/ Policy/);
  assert.equal(await graph.locator('[data-trace-node="B:2"]').getAttribute('aria-pressed'),'true');
  await clickView(page,'tournament');
  assert.match(await page.locator('.view[data-view="tournament"] [data-trace-focus]').innerText(),/B · Policy/);
  await page.locator('.view[data-view="tournament"] [data-trace-node="A:1"]').click();
  assert.match(await page.locator('#trace-context').innerText(),/A \/ Service/);
  await page.locator('.view[data-view="tournament"] [data-arm="B"]').click();
  assert.match(await page.locator('#trace-context').innerText(),/B \/ Routes/,'Arm switching must not remap Service to Ownership');
  await page.locator('.view[data-view="tournament"] [data-trace-node="A:1"]').click();
  await clickView(page,'time');
  await page.locator('[data-stage="after"]').click();
  assert.match(await page.locator('#trace-context').innerText(),/After/);
  assert.match(await page.locator('.view[data-view="time"] [data-trace-focus]').innerText(),/No edit is observed/);
  assert.match(await page.locator('#time-label').innerText(),/SOURCE UNAVAILABLE/);
  assert.deepEqual(errors,[]);await page.close();
});
await test('Tournament and report reasons inspect actual evidence requirements, not fictional proofs',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await clickView(page,'tournament');
  await page.getByRole('button',{name:'Inspect comparability requirements'}).click();
  assert.equal(await page.locator('.view[data-view="evidence"]').isVisible(),true);
  assert.match(await page.locator('#evidence-focus-title').innerText(),/COMPARABILITY/);
  assert.match(await page.locator('#evidence-focus-copy').innerText(),/No eligible matched comparison/);
  assert.equal(await page.locator('#evidence-focus').evaluate(e=>document.activeElement===e),true);
  await page.getByRole('button',{name:'Return to Tournament'}).click();
  assert.equal(await page.locator('.view[data-view="tournament"]').isVisible(),true);
  await clickView(page,'report');
  for(const [name,expected] of [
    ['Inspect required checks','INDEPENDENT CHECKS'],
    ['Inspect source & effort requirements','SOURCE + PREPARATION'],
    ['Inspect hypothesis limits','META SCIENTIST']
  ]){
    await page.getByRole('button',{name}).click();
    assert.match(await page.locator('#evidence-focus-title').innerText(),new RegExp(expected.replace('+','\\+')));
    assert.match(await page.locator('#evidence-focus-copy').innerText(),/No |not |cannot |remain /i);
    await page.getByRole('button',{name:'Return to Decision Report'}).click();
    assert.equal(await page.locator('.view[data-view="report"]').isVisible(),true);
  }
  await page.locator('[data-mode="keep"]').click();
  assert.equal(await page.locator('#reason-link-1').getAttribute('data-inspect-evidence'),'checks');
  await page.locator('#reason-link-1').click();
  assert.match(await page.locator('#evidence-focus-copy').innerText(),/fictional report variants cannot become verified outcomes/i);
  assert.match(await page.locator('.notice').innerText(),/DESIGN SPECIMEN/);
  assert.deepEqual(errors,[]);await page.close();
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
await test('Decision memo facts are truthful per fictional scenario and print cleanly',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await clickView(page,'report');
  const expected={
    unknown:['NO AUTHENTIC MATCHED STUDY',/No matched A\/B future-task study/,/Source and run identities/],
    keep:['FICTIONAL SCENARIO · A-ONLY PASS',/Illustrative outcomes would show A passing/,/Actual run and receipt identities/],
    refactor:['FICTIONAL SCENARIO · B-ONLY PASS',/Illustrative outcomes would show B passing/,/B preparation-inclusive measurements/],
    tie:['FICTIONAL SCENARIO · CORRECTNESS TIE',/Illustrative outcomes would show both arms passing/,/authenticated effort criterion/],
    fail:['FICTIONAL SCENARIO · BOTH FAIL',/Illustrative outcomes would show both architectures failing/,/Actual failure receipts/],
    invalid:['FICTIONAL SCENARIO · UNMATCHED',/illustrative comparison fails/,/valid matched study/]
  };
  for(const [mode,[label,tested,unknown]] of Object.entries(expected)){
    await page.locator('[data-mode="'+mode+'"]').click();
    assert.equal(await page.locator('#report-study-status').innerText(),label);
    assert.match(await page.locator('#report-tested').innerText(),tested);
    assert.match(await page.locator('#report-unknown').innerText(),unknown);
    assert.match(await page.locator('.paper-sample').innerText(),/FICTIONAL/);
  }
  await page.locator('[data-mode="unknown"]').click();
  await page.screenshot({path:screenshots+'/06-report-revised-desktop.png',fullPage:true});
  await page.emulateMedia({media:'print'});
  assert.equal(await page.locator('.view[data-view="report"] .paper').isVisible(),true);
  assert.equal(await page.locator('.view[data-view="report"] > .chaphead').isVisible(),false);
  assert.equal(await page.locator('.view[data-view="report"] > .report-demo-notice').isVisible(),false);
  assert.equal(await page.locator('.paper-inspect').first().isVisible(),false);
  assert.match(await page.locator('#report-tested').innerText(),/No matched/);
  await page.emulateMedia({media:'screen'});
  assert.equal(await page.locator('.report-demo-notice').isVisible(),true);
  assert.deepEqual(errors,[]);await page.close();
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
await test('Chapter history supports browser Back and Forward with restored visual context',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await page.locator('.view[data-view="case"] [data-open-arm="B"]').click();
  assert.equal(await page.locator('.view[data-view="lab"]').isVisible(),true);
  await clickView(page,'tournament');
  assert.match(await page.locator('#trace-context').innerText(),/B \/ Routes/);
  await page.goBack();
  assert.equal(await page.locator('.view[data-view="lab"]').isVisible(),true);
  assert.equal(await page.locator('.chapters [data-go="lab"]').getAttribute('aria-current'),'step');
  assert.match(await page.locator('#trace-context').innerText(),/B \/ Routes/);
  await page.goForward();
  assert.equal(await page.locator('.view[data-view="tournament"]').isVisible(),true);
  assert.match(await page.locator('#trace-context').innerText(),/B \/ Routes/);
  assert.deepEqual(errors,[]);await page.close();
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

await test('Tournament signature trace is above fairness rows in the first desktop viewport',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await clickView(page,'tournament');
  const pos=await page.evaluate(()=>{
    const trace=document.querySelector('.view[data-view="tournament"] .canvas');
    const conditions=document.querySelector('.view[data-view="tournament"] .tournament-conditions');
    return {traceTop:trace.getBoundingClientRect().top,conditionsTop:conditions.getBoundingClientRect().top,height:innerHeight};
  });
  assert.ok(pos.traceTop<pos.conditionsTop,'Trace must precede prerequisites: '+JSON.stringify(pos));
  assert.ok(pos.traceTop<pos.height-100,'The signature visualization must enter the first viewport: '+JSON.stringify(pos));
  await noDocumentOverflow(page,'desktop tournament first fold');
  assert.deepEqual(errors,[]);await page.close();
});
await test('Each fictional report reason navigates to matching evidence and restores its exact trigger',async()=>{
  const {page,errors}=await pageAt(1440,900);
  await clickView(page,'report');
  const modes={
    unknown:['checks','source','hypothesis'],
    keep:['checks','source','hypothesis'],
    refactor:['checks','source','hypothesis'],
    tie:['checks','source','source'],
    fail:['checks','checks','checks'],
    invalid:['fairness','fairness','fairness']
  };
  for(const [mode,targetKinds] of Object.entries(modes)){
    await page.locator('[data-mode="'+mode+'"]').click();
    const kinds=await page.locator('.view[data-view="report"] .reason .paper-inspect').evaluateAll(nodes=>nodes.map(n=>n.dataset.inspectEvidence));
    assert.deepEqual(kinds,targetKinds,'Reason targets for '+mode);
    await page.locator('#reason-link-1').click();
    assert.equal(await page.locator('.view[data-view="evidence"]').isVisible(),true);
    assert.match(await page.locator('#evidence-focus-title').innerText(),targetKinds[0]==='fairness'?/COMPARABILITY/:/INDEPENDENT CHECKS/);
    await page.locator('[data-return-evidence]').click();
    assert.equal(await page.locator('.view[data-view="report"]').isVisible(),true);
    assert.equal(await page.evaluate(()=>document.activeElement?.id),'reason-link-1','Exact focus restoration for '+mode);
    assert.equal(await page.locator('[data-mode="'+mode+'"]').getAttribute('aria-pressed'),'true');
  }
  assert.deepEqual(errors,[]);await page.close();
});
await test('Scrollable graphs and mobile wayfinding retain readable labels and report metadata',async()=>{
  for(const width of [1440,390]){
    const {page,errors}=await pageAt(width,900,true);
    await clickView(page,'lab');
    const trace=page.locator('.view[data-view="lab"] .trace-scroll');
    assert.equal(await trace.getAttribute('tabindex'),'0');
    const label=await trace.locator('.micro').first().evaluate(e=>parseFloat(getComputedStyle(e).fontSize));
    assert.ok(label>=14,'Trace caption too small: '+label);
    await trace.focus();
    assert.equal(await trace.evaluate(e=>document.activeElement===e),true);
    if(width===390){
      assert.equal(await page.locator('.mobile-chapter-hint').isVisible(),true);
      const nav=await page.locator('.chapters').evaluate(e=>({client:e.clientWidth,scroll:e.scrollWidth}));
      assert.ok(nav.scroll>nav.client,'Mobile chapters should be scrollable');
      await clickView(page,'report');
      assert.equal(await page.locator('.paper-top .document-id').evaluate(e=>getComputedStyle(e).display),'block');
      await noDocumentOverflow(page,'mobile report header');
    } else {
      assert.equal(await page.locator('.mobile-chapter-hint').isVisible(),false);
    }
    assert.deepEqual(errors,[]);await page.close();
  }
});

await browser.close();
console.log('Browser checks failed:',failures);
if(failures)process.exitCode=1;
