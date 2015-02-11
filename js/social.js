var access_token = "";
var img_url = "";
var first_name = "";
var id = "";

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
    id = response.id;
    $('#title').text("Hi " + first_name + ". Insert your health profile!");
  });

  FB.api("/me/picture?type=normal&height=120&width=120&redirect=false", function(response) {
    img_url = response.data.url;
    $('#fb-image').css('background-image', 'url(' + response.data.url + ')');
  });
}

function send_request(obj) {

  var url = "http://188.226.183.46/cross.php";
  var data_obj = {"token": access_token, "height": obj.height, "weight": obj.weight };

  console.log(JSON.stringify(data_obj));

  $('#first').hide();
  $('.copyright').hide();
  $('#circularG').show();

  $.ajax({
      type: 'POST',
      url: url,
      data: data_obj,
      success: function(data) {
        console.log('Height and Weight sent! Response: ' + data);
        call_director();
      },
      error: function(errMsg) {
        console.log(errMsg);
      }
  });
}

function call_director() {

  $.getJSON("http://188.226.183.46:9091/project-director/weather?callback=?&token=" + access_token, function(response_p1){

    console.log(response_p1);

    act1 = response_p1.result[0].activityplan;
    act2 = response_p1.result[1].activityplan;
    act3 = response_p1.result[2].activityplan;

    weather1 = response_p1.result[0].weather;
    weather2 = response_p1.result[1].weather;
    weather3 = response_p1.result[2].weather;

    $.getJSON("http://188.226.183.46:9091/project-director/food?callback=?&token=" + access_token, function(response_p2){

      console.log(response_p2);

      bg = response_p2.result.foodPhoto.url;
      suggested_food = response_p2.result.suggestedFood.name;

      $('#circularG').hide();
      $('#first').show();
      $('.copyright').show();

      $('#form').hide();
      $('.shadow_overlay').show();
      $('#flickr_bg').css('background-image', 'url("'+ bg +'")');
      $('#quote').text(act1.phrase);
      $('.motivational_quote').show();
      $('#title').text(suggested_food);
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
