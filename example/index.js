const BaiduNLU = require('..');

const bot = new BaiduNLU({
        client_id: 'XUNlxnsSZF7KGGahNbbFGU5j',
    client_secret: '8s7pi2RfcHKcV7ldUAcsIGZTtn9Hk9b2'
});

(async () => {

    const res = await bot.hello();
    console.log(res);

})();