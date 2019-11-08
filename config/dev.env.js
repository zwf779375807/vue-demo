'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: "'http://127.0.0.1/api'"  // 开发环境 接口路径 必须是双层引号
})
