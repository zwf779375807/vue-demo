'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./test.env') // here

module.exports = merge(prodEnv, {
  NODE_ENV: '"test"', // here
  API_ROOT: "'http://www.myTest.com/api'" // 测试环境 接口路径 // here 必须是双层引号
})
