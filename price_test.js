Feature('price');

Scenario('test price in order', async ({ I }) => {
    I.amOnPage('https://www.reg.ru/web-sites/website-builder/');
    I.see('reg.ru');
    let hostingPrice = await I.grabValueFrom('//*[@id="content"]/div[2]/form/div/div[3]/div/div[2]/p/strong');
    I.click('//*[@id="content"]/div[2]/form/div/div[3]/div/div[3]/div');
    I.fillField('domain', 'lets-reg-test-domain.ru');
    I.click('//*/div/div[3]/div[1]/div/div[2]/div[4]/div/div/div/div/div[2]/div[2]/div/div/div/div[1]/div');
    I.see('Оплатить');
    //let domainPrice = await I.grabValueFrom('//span[@class = "domain-in-order-price__final"]');
    //let orderPrice = await I.grabValueFrom('//span[@class="order-footer-price__price"]');


});
