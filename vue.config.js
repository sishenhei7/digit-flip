const BASE_URL = process.env.NODE_ENV === 'production' ? '/digit-flip/' : '/'

module.exports = {
  publicPath: BASE_URL,
  productionSourceMap: false,
}
