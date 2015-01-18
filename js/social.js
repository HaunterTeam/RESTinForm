
var access_token = "";

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    alert(response.authResponse.accessToken);
    access_token = response.authResponse.accessToken;
    testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  FB.api('/me?field=name,id', function(response) {
    alert('Successful login for: ' + response.name);
  });
}

function send_request() {

  var myObject = new Object();
  myObject.token = access_token;

  alert(access_token);

  $.ajax({
    type: "POST",
    crossDomain: true,
    jsonp: false,
    jsonpCallback: "succ" 
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    url: "http://127.0.0.1:8000/project-director/facebook",
    data: JSON.stringify(myObject),
    success: function(data)
    {
      var obj = jQuery.parseJSON(data);
      alert(obj.id);
      alert(obj.fist_name);
      alert(obj.image_url);
      // $('body').append(data);
      // if(err == "Errore nell'invio dell'e-mail." || err == "E-mail non valida.") {
      //   $('#form-send-message').addClass('form-send-errors')
      // }
      // else {
      //   $('#form-send-message').addClass('form-send-success');
      // }
    }//,
    // error: function(error) {
    //   alert(error);
    // }
  });

}

function succ(data) {
  var obj = jQuery.parseJSON(data);
      alert(obj.id);
      alert(obj.fist_name);
      alert(obj.image_url);
}

