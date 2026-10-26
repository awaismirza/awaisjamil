import { chromium } from 'playwright'
import assert from 'node:assert/strict'
const browser = await chromium.launch({channel:'chrome',headless:true})
const page=await browser.newPage()
const errors=[]
page.on('pageerror',e=>errors.push(e.message))
await page.goto('http://127.0.0.1:5194/')
await page.getByRole('button',{name:'Products',exact:true}).click()
const link=page.getByRole('link',{name:/WordsCut/})
assert.equal(await link.getAttribute('href'),'https://wordscut.com')
for (const name of ['wordscut','yusafcut']) for(const suffix of ['', '/privacy','/terms','/support']) {
 let target
 await page.route('https://wordscut.com/**', route=>{target=route.request().url();return route.fulfill({status:200,body:'Destination verified'})})
 await page.goto(`http://127.0.0.1:5194/products/${name}${suffix}`)
 await page.waitForURL(`https://wordscut.com${suffix || '/'}`)
 assert.equal(target,`https://wordscut.com${suffix || '/'}`)
 await page.unroute('https://wordscut.com/**')
}
await page.goto('http://127.0.0.1:5194/products/freezerpal')
assert.match(await page.locator('h1').innerText(),/freezer/i)
assert.deepEqual(errors,[])
await browser.close()
console.log('PASS: portfolio Products menu links externally, eight legacy URLs reach correct destinations, other product preserved.')
