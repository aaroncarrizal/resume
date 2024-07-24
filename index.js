import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('file://' + __dirname + '/resume.html', { waitUntil: 'networkidle2' });
// Set screen size.
await page.setViewport({ width: 1632, height: 2112 });
await page.pdf({
    path: 'cv.pdf', format: 'letter', printBackground: true,
    margin: {
        top: '0mm',
        bottom: '0mm',
        left: '0mm',
        right: '0mm',
    },
});

await browser.close();