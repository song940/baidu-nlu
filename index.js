const xttp = require('xttp');

class BaiduOAuth {
  constructor(options){
    Object.assign(this, options);
  }
  accessToken(grant_type = 'client_credentials'){
    const { client_id, client_secret } = this;
    return xttp.post('https://aip.baidubce.com/oauth/2.0/token', {
      query: {
        grant_type,
        client_id,
        client_secret,
      }
    })
    .then(res => res.json())
    .then(res => {
      res.scopes = res.scope.split(' ');
      return res;
    });
  }
  request(){
    return Promise
      .resolve()
      .then(() => this.accessToken())
  }
}

/**
 * Baidu NLU
 * http://ai.baidu.com/docs#/UNIT-v2-API/top
 */
class BaiduNLU extends BaiduOAuth {
  hello(){
    return this.request();
  }
}

module.exports = BaiduNLU;