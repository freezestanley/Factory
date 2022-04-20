import request, { extend, ExtendOptionsInit, RequestMethod } from 'umi-request'
import { useRequest } from 'ahooks'
import React from 'react'
const baseUrl = 'http://localhost:7777/api'
// request中间件
request.use(async (ctx, next) => await next(), { core: true })
//request守卫
request.interceptors.request.use((url, options) => {
  return { url, options }
})
request.interceptors.response.use((response, options) => {
  return response
})
// 当前应用实例
export const Frequest: RequestMethod = extend({
  prefix: baseUrl,
  timeout: 1000,
  loadingDelay: 300,
  debounceWait: 200,
  errorHandler: (error) => {
    // 统一处理errorHandler
  }
})
// 实例中间件
Frequest.use(async (ctx, next) => await next())
// 实例守卫
Frequest.interceptors.request.use((url, options) => {
  return { url: `${url}`, options: { ...options, interceptors: true } }
})
Frequest.interceptors.response.use((response, options) => {
  return response
})
