const { Builder, By, Key, until } = require('selenium-webdriver');

async function boletoFacul() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.manage().window().maximize();
        // Abre o navegador 
        await driver.get('https://sia.estacio.br/sianet/Logon');

        // Aguarda o campo de login estar presente
        await driver.wait(until.elementLocated(By.id('Usuario')), 10000);
        // Preenche o campo de login
        await driver.findElement(By.id('Usuario')).sendKeys('202301472563');
        await driver.findElement(By.id('Senha')).sendKeys('Ch1212');

        // Clica no Captcha 
        const botao = await driver.wait(until.elementLocated(By.id('rc-anchor-container')), 10000);

        // Scroll até o botão
        await driver.executeScript("arguments[0].scrollIntoView(true);", botao);

        // Cria uma ação com o mouse
        const actions = driver.actions({ async: true });

        // Move o mouse até o botão e clica
        await actions.move({ origin: botao }).pause(500).click().perform();
        // Aguarda o captcha ser resolvido 
        await driver.wait(until.elementLocated(By.id('btnEntrar')).click(), 10000);


    } finally {
        await driver.quit();
    }
}

boletoFacul();
