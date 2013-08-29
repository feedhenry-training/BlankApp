/* Entry point for the cloud app. 
 * By default, you can use fh-nodeapp as the web framework, which wll provide all the FeedHenry Cloud APIs, analytics and stats information. 
 * If you don't want any of these, alternatively, you can use any other Node.js web framework, and initialize it here.
 */
var nodeapp = require("fh-nodeapp");
nodeapp.HostApp.init();
nodeapp.HostApp.serveApp(require('main.js'));