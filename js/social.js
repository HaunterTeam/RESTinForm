var access_token = "";
var img_url = "";
var first_name = "";

function saveToken(accessToken) {
  access_token = accessToken;
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {

  // Logged into your app and Facebook.
  if (response.status === 'connected') {
    saveToken(response.authResponse.accessToken);
    getProfileInfo();
    updateView();
  } else if (response.status === 'not_authorized') {
    /* TODO */
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

  // alert(access_token);

  // $.ajax({
  //   crossDomain: true,
  //   type:'POST',
  //   dataType: 'jsonp',
  //   url: "http://restindirectorservice.herokuapp.com/project-director/facebook",
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


  $('body').append("Richiesta p1");

  // restindirectorservice.herokuapp.com

  $.getJSON("http://localhost:9091/project-director/weather?callback=?&token=" + access_token, function(response_p1){
    //response data are now in the result variable

    act1 = response_p1.result[0].activityplan;
    act2 = response_p1.result[1].activityplan;
    act3 = response_p1.result[2].activityplan;

    weather1 = response_p1.result[0].weather;
    weather2 = response_p1.result[1].weather;
    weather3 = response_p1.result[2].weather;

    $('body').append("Richiesta p2");

    $.getJSON("http://localhost:9091/project-director/food?callback=?&token=" + access_token, function(response_p2){
      //response data are now in the result variable

      console.log(response_p2);

      $('#form').hide();
      $('#flickr_bg').css('background-image', 'url("'+ images[0] +'")');
      $('#quote').text(act1.phrase);
      $('.motivational_quote').show();
      $('#title').text(food_name[0]);
      $('.subtitle').hide();
      $('.center').addClass('results');
      $('.scroll_down').show();

      $('#block-day-1 .wi').addClass('wi-'+weather1.weather.toLowerCase());
      $('#block-day-2 .wi').addClass('wi-'+weather2.weather.toLowerCase());
      $('#block-day-3 .wi').addClass('wi-'+weather3.weather.toLowerCase());

      $('#block-day-1 .calendar').text(act1.activity);
      $('#block-day-2 .calendar').text(act2.activity);
      $('#block-day-3 .calendar').text(act3.activity);
      $('#second').show();
    });
  });
}

function updateView() {
  $('.fb-login').hide();
  $('#fb-image').show();
  $('.subtitle').text("Height is in cm while Weight is in kg.");
  $('#form').show();
}
