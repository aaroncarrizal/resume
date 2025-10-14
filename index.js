import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

page.setDefaultNavigationTimeout(120000);

console.log('Esperando a que el servidor de Nuxt esté disponible...');

await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

console.log('Página cargada correctamente. Generando PDF...');

await page.setViewport({ width: 1632, height: 2112 });

await new Promise(resolve => setTimeout(resolve, 3000));

await page.pdf({
    path: 'Aarón_Mishael_Carrizal_Méndez-Web_Developer.pdf',
    format: 'letter',
    printBackground: true,
    margin: {
        top: '0mm',
        bottom: '0mm',
        left: '0mm',
        right: '0mm',
    },
});

console.log('📄 PDF generado correctamente.');

await browser.close();
