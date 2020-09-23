"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
***REMOVED***

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
***REMOVED***,
  function(error) {
    // Do something with request error
    return Promise.reject(error);
***REMOVED***
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
***REMOVED***,
  function(error) {
    // Do something with response error
    return Promise.reject(error);
***REMOVED***
);

Plugin.install = function(Vue /*, options*/) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
    ***REMOVED***
  ***REMOVED***,
    $axios: {
      get() {
        return _axios;
    ***REMOVED***
  ***REMOVED***
***REMOVED***);
***REMOVED***

Vue.use(Plugin);

export default Plugin;
