Feature('price');

Scenario('test price in order', async ({ I }) => {
    I.amOnPage('https://www.reg.ru/web-sites/website-builder/');
    I.see('reg.ru');
    let hostingPrice = await I.grabValueFrom('//*[@id="content"]/div[2]/form/div/div[3]/div/div[2]/p/strong');
    //return hostingPrice;
    I.click('//*[@id="content"]/div[2]/form/div/div[3]/div/div[3]/div');
    I.fillField('domain', 'lets-reg-test-domain.ru');
    I.see('199');
    const domainPrice = await I.grabTextFrom('');

});
