/*
JSON is automatically included with each app.

If you are building a FeedHenry hybrid client app and planning to run it on multiple mobile devices, we strongly recommend you to use $fh.ready() (http://docs.feedhenry.com/v2/api_client_hybrid.html#$fh.ready) function
to initialize your app. This will ensure all the necessary files for the app are loaded for different environments.
*/

$fh.ready(function() {

  document.getElementById('echo_btn').onclick = function() {
    // Invoke the "echo" function on the cloud and show the result
    // http://docs.feedhenry.com/v2/api_js_client_api.html#$fh.act
    var word = document.getElementById('echo_word').value;
    $fh.act(
      {
        act:'echo',          //the function name
        req: {'word': word}  //the parameter for the function
      },
      function(res) {
        document.getElementById('cloud_echo').innerHTML = "<p>" + res.echo + "</p>";
      },
      function(code,errorprops,params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
    );
  };
});