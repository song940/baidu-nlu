const xttp = require('xttp');

class BaiduHTTP {
  constructor(options){
    Object.assign(this, options);
  }
  request(path, params){
    const { api } = this;
    return xttp
      .post(api + path, params)
      .then(res => res.json());
  }
}

class BaiduOAuth extends BaiduHTTP {
  accessToken(grant_type = 'client_credentials'){
    const { client_id, client_secret } = this;
    return super.request('/oauth/2.0/token', {
      query: {
        grant_type,
        client_id,
        client_secret,
      }
    })
    .then(res => {
      res.scopes = res.scope.split(' ');
      return res;
    });
  }
  request(path, params){
    return Promise
      .resolve()
      .then(() => this.accessToken())
      .then(({ access_token }) => {
        return super.request(path, Object.assign({
          query: { access_token }
        }, params));
      });
  }
}

/**
 * Baidu NLU
 * http://ai.baidu.com/docs#/UNIT-v2-API/top
 */
class BaiduNLU extends BaiduOAuth {
  constructor(options){
    super(Object.assign({
      api: 'https://aip.baidubce.com'
    }, options));
  }
  call(service, params){
    return this.request(`/rpc/2.0/unit/${service}/chat`, {
      body: params
    });
  }
  service(params){
    return this.call('service', params);
  }
  bot(params){
    return this.call('bot', params);
  }
}

module.exports = BaiduNLU;