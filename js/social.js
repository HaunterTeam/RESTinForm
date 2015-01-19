
var access_token = "";

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
        saveToken();
        getProfileInfo();
        updateView();
      }
    });
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

function getProfileInfo() {
  FB.api('/me?field=name,id', function(response) {
    alert('Successful login for: ' + response.name);
  });
  $.getJSON("http://127.0.0.1:8000/project-director/facebook?callback=?&token=" + access_token, function(result){
    //response data are now in the result variable
    console.log(result);
    alert("First name: "+ result.info.first_name);
    alert("Image url: "+ result.image.image_url);
  });
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
    "e perche' fuori nevica ",
    "e perche' PEJO e' un bel paesino ",
    "e perche' sono stanco di scrivere ");
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

  // $.getJSON("http://127.0.0.1:8000/project-director/facebook?callback=?&token=" + access_token, function(result){
  //   //response data are now in the result variable
  //   console.log(result);
  //   // var obj = jQuery.parseJSON(result);
  //   // console.log("parsed");
  //   console.log(result.info);
  //   console.log(result.info.first_name);
  //   console.log(result.image.image_url);
  // });

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
  $('#title').text("Hi Roberto. Insert your health profile!");
  $('.subtitle').text("Height is in cm while Weight is in kg.");
  $('#form').show();
}
