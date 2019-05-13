const BaiduNLU = require('..');

const bot = new BaiduNLU({
  client_id: 'XUNlxnsSZF7KGGahNbbFGU5j',
  client_secret: '8s7pi2RfcHKcV7ldUAcsIGZTtn9Hk9b2'
});

var postData = {
  // 'log_id': '7758521',
  'version': '2.0',
  'request': {
    'user_id': '88888',
    'query_info': {
      'asr_candidates': [],
      'type': 'TEXT',
      'source': 'KEYBOARD'
    },
    'bernard_level': 1,
    // 'updates': '',
    'query': '你好',
    // 'client_session': '{"client_results":"", "candidate_options":[]}'
  },
  'bot_session': '',
  'bot_id': '1057'
};

(async () => {

  const res = await bot.service(postData);
  console.log(res);

})();