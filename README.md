# polymer-dynamic-loading
Demos the issue with dynamically loaded Polymer elements in Firefox and Safari

To get started with the example just clone it and launch any Web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) in the root dir of the project. "Custom Element" `<h1>` header appears in Google Chrome browser, but the blank page is displayed in Firefox and Safari. However `ready()` callback of the element is invoked and the log message is printed to the console.
