var access_token = "";
var img_url = "";
var first_name = "";

function saveToken(accessToken) {
  access_token = accessToken;
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  
  console.log('statusChangeCallback');
  console.log(response);

  // Logged into your app and Facebook.
  if (response.status === 'connected') {
    saveToken(response.authResponse.accessToken);
    getProfileInfo();
    updateView();
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log into this app.';
  } else {
    FB.login(function(response) {
      if (response.authResponse ) {
        saveToken(response.authResponse.accessToken);
        getProfileInfo();
        updateView();
      }
    }, {scope: 'user_about_me,user_location'});
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  }, {scope: 'user_about_me,user_location'});
}

function getProfileInfo() {

  FB.api('/me?field=id,first_name,location', function(response) {
    first_name = response.first_name;
    $('#title').text("Hi " + first_name + ". Insert your health profile!");
  });

  FB.api("/me/picture?type=normal&height=120&width=120&redirect=false", function(response) {
    img_url = response.data.url;
    $('#fb-image').css('background-image', 'url(' + response.data.url + ')');
  });

  // $.getJSON("http://127.0.0.1:9091/project-director/weather?callback=?&token=" + access_token, function(result){
  //   //response data are now in the result variable
  //   console.log(result);
  //   // alert("ID: " + result.info.id);
  //   // alert("First name: "+ result.info.first_name);
  //   // alert("Location: "+ result.info.location);
  // });
}

function send_request() {

  var myObject = new Object();
  myObject.token = access_token;

  var food_name = new Array("Arrosticini", "Piattone Gigante", "Paninazzo", "Carbonara", "Insalatina");
  var images = new Array(
    "http://www.hermestocchetti.com/sites/default/files/styles/fullsize/public/gallery/4-food-meat/p195bn87uf1gds1qrv1sc3o5c1nv34.jpg?itok=c1-Z_tur",
    "http://www.hermestocchetti.com/sites/default/files/styles/fullsize/public/gallery/4-food-meat/p195bn87ufbhf1fs0ou112464m7.jpg?itok=EKAbMm1x",
    "http://asiastreetfood.com/wp-content/uploads/2014/06/BanhMi.jpg",
    "https://c1.staticflickr.com/5/4001/4283223635_da5e247b5e_b.jpg",
    "https://c4.staticflickr.com/4/3709/9499573644_05a0e270fd_k.jpg"
    );

  var start = new Array(
    "Sei dimagrito rispetto a ieri, ",
    "Sei ingrassato rispetto a ieri, ",
    "Good work, ");
  var middle = new Array(
    "and because it is cloudy",
    "and because i am sad",
    "and because i am happy");
  var end = new Array(
    "you deserve:",
    "you are allowed to eat:",
    "today you have to eat:");

  var start_index = Math.floor((Math.random() * 3));
  var middle_index = Math.floor((Math.random() * 3));
  var end_index = Math.floor((Math.random() * 3));
  var food_index = Math.floor((Math.random() * 5));

  var congrats = start[start_index] + middle[middle_index] + end[end_index];

  // alert(access_token);

  // $.ajax({
  //   crossDomain: true,
  //   type:'POST',
  //   dataType: 'jsonp',
  //   url: "http://127.0.0.1:8000/project-director/facebook",
  //   data: JSON.stringify(myObject),
  //   success: function(data)
  //   {
  //     var obj = jQuery.parseJSON(data);
  //     alert(obj.id);
  //     alert(obj.fist_name);
  //     alert(obj.image_url);
  //     // $('body').append(data);
  //     // if(err == "Errore nell'invio dell'e-mail." || err == "E-mail non valida.") {
  //     //   $('#form-send-message').addClass('form-send-errors')
  //     // }
  //     // else {
  //     //   $('#form-send-message').addClass('form-send-success');
  //     // }
  //   }//,
  //   // error: function(error) {
  //   //   alert(error);
  //   // }
  // });

  $.getJSON("http://127.0.0.1:9091/project-director/weather?callback=?&token=" + access_token, function(result){
    //response data are now in the result variable
    console.log(result);
    // var obj = jQuery.parseJSON(result);
    // console.log("parsed");
    // console.log(result.info);
    // console.log(result.info.first_name);
    // console.log(result.image.image_url);
  });

  $('#form').hide();
  $('#flickr_bg').css('background-image', 'url("'+ images[food_index] +'")');
  $('#quote').text(congrats);
  $('.motivational_quote').show();
  $('#title').text(food_name[food_index]);
  $('.subtitle').hide();
  $('.center').addClass('results');
  $('.scroll_down').show();
  $('#second').show();
}

function succ(data) {
  var obj = jQuery.parseJSON(data);
  alert(obj.id);
  alert(obj.fist_name);
  alert(obj.image_url);
}

function updateView() {
  $('.fb-login').hide();
  $('#fb-image').show();
  $('.subtitle').text("Height is in cm while Weight is in kg.");
  $('#form').show();
}
