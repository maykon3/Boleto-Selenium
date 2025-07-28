const { Builder, By, Key, until } = require('selenium-webdriver');

async function ingressoSaoPaulo() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().maximize();

        // Abre o site
        await driver.get('https://www.spfcticket.net/proximos-jogos/');

        const comprar = await driver.wait(
            until.elementLocated(By.xpath("//a[contains(normalize-space(),'Comprar agora')]")),
            10000
        );

        // Role até o botão usando scrollIntoView
        await driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", comprar);

        // Aguarda o botão estar visível e clicável
        await driver.wait(until.elementIsVisible(comprar), 5000);

        // Clica no botão
        await comprar.click();

        const comprarAgora = await driver.wait(until.elementLocated(By.xpath("//a[contains(normalize-space(),'Comprar agora')]")), 10000);
        await comprarAgora.click();

        // Preenche o campo de login
        await driver.findElement(By.id('Usuario')).sendKeys('*********'); ''
        await driver.findElement(By.id('Senha')).sendKeys('*******');

    } finally {
        await driver.quit();
    }
}

ingressoSaoPaulo();
