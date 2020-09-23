/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
  ***REMOVED***,
    registered() {
      console.log("Service worker has been registered.");
  ***REMOVED***,
    cached() {
      console.log("Content has been cached for offline use.");
  ***REMOVED***,
    updatefound() {
      console.log("New content is downloading.");
  ***REMOVED***,
    updated() {
      console.log("New content is available; please refresh.");
  ***REMOVED***,
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
  ***REMOVED***,
    error(error) {
      console.error("Error during service worker registration:", error);
  ***REMOVED***
***REMOVED***);
}
