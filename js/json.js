

    // Process centric service

    var dir_res_err = {"status":{"message":"Invalid OAuth access token","code":1}}

    var dir_res = {
        "result":[  
              {  
                 "activityplan":{  
                    "bmirange":2,
                    "idphrase":4,
                    "change":2,
                    "phrase":"poppa333",
                    "weathertype":1,
                    "activity":"ciao"
                 },
                 "weather":{  
                    "location":"Trento, Italy",
                    "temp":-4.8,
                    "weather":"Clear",
                    "type":1
                 }
              },
              {  
                 "activityplan":{  
                    "bmirange":2,
                    "idphrase":4,
                    "change":2,
                    "phrase":"poppa333",
                    "weathertype":1,
                    "activity":"ciao"
                 },
                 "weather":{  
                    "location":"Trento, Italy",
                    "temp":-6.28,
                    "weather":"Clear",
                    "type":1
                 }
              },
              {  
                 "activityplan":{  
                    "bmirange":2,
                    "idphrase":4,
                    "change":2,
                    "phrase":"poppa333",
                    "weathertype":1,
                    "activity":"ciao"
                 },
                 "weather":{  
                    "location":"Trento, Italy",
                    "temp":-4.37,
                    "weather":"Clouds",
                    "type":1
                 }
              }
           ]
        }

    // FACEBOOK JSON
    var fb_service_invalid_token = {
        "status":{
            "message":"Invalid OAuth access token",
            "code":1
        }
    };

    var fb_service_valid_token = {
        "id":"10203701191346680",
        "first_name":"Roberto",
        "status":{
            "message":"Valid Request",
            "code":200
        },
        "location":"Trento, Italy"
    };

    var fb_invalid_token = {
       "error": {
          "message": "Invalid OAuth access token.",
          "type": "OAuthException",
          "code": 190
       }
    };

    var fb_valid_token = {
       "id": "10203701191346680",
       "first_name": "Roberto",
       "location": {
          "id": "110085715688081",
          "name": "Trento, Italy"
       }
    };

    var rest_nutritionix_result = {
        "item_name":"Pizza",
        "brand_name":"La Madeleine",
        "calories":480.0,
        "fat":21.0
    }
    var flickr_result = {
      "url":"https://flickr.com/photos/20170235@N03/6265967428",
      "id":"6265967428",
      "dateAdded":null,
      "description":null,
      "title":"Pizza Story :D"
    }

    /*var rest_in_db_all = {[
    {"id":1,"firstname":"Mirko","lastname":"Morandi","birthdate":695538000000,"measureHistory":[{"mid":1,"measureValue":"80","dateRegistered":1335326400000,"measureType":"weight"},
    {"mid":2,"measureValue":"93","dateRegistered":1416805200000,"measureType":"weight"},{"mid":3,"measureValue":"185","dateRegistered":1387688400000,"measureType":"height"},
    {"mid":205,"measureValue":"110","dateRegistered":1322370000000,"measureType":"weight"},
    {"mid":255,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":306,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"}
    ,{"mid":307,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":308,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":356,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":406,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":506,"measureValue":"95","dateRegistered":1421557200000,"measureType":"weight"}],"currentHealth":[
    {"mid":406,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":3,"measureValue":"185","dateRegistered":1387688400000,"measureType":"height"}],"lastBMI":32.14024835646457,"oldBMI":32.14024835646457},
    "id":2,"firstname":"Chuck","lastname":"Norris","birthdate":-788904000000,"measureHistory":[{"mid":4,"measureValue":"120","dateRegistered":1299214800000,"measureType":"bloodpressure"},{"mid":5,"measureValue":"80","dateRegistered":1416891600000,"measureType":"weight"},{"mid":80,"measureValue":"165","dateRegistered":1416891600000,"measureType":"height"}]]}

    var rest_in_db_person_details = {"id":1,"firstname":"Mirko","lastname":"Morandi","birthdate":695538000000,"measureHistory":[{"mid":1,"measureValue":"80","dateRegistered":1335326400000,"measureType":"weight"},{"mid":2,"measureValue":"93","dateRegistered":1416805200000,"measureType":"weight"},{"mid":3,"measureValue":"185","dateRegistered":1387688400000,"measureType":"height"},{"mid":205,"measureValue":"110","dateRegistered":1322370000000,"measureType":"weight"},{"mid":255,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":306,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":307,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":308,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":356,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":406,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":506,"measureValue":"95","dateRegistered":1421557200000,"measureType":"weight"}],"currentHealth":[{"mid":406,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":3,"measureValue":"185","dateRegistered":1387688400000,"measureType":"height"}],"lastBMI":32.14024835646457,"oldBMI":32.14024835646457}

    var rest_in_db_measure_list = [{"mid":1,"measureValue":"80","dateRegistered":1335326400000,"measureType":"weight"},{"mid":2,"measureValue":"93","dateRegistered":1416805200000,"measureType":"weight"},{"mid":205,"measureValue":"110","dateRegistered":1322370000000,"measureType":"weight"},{"mid":255,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":306,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":307,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":308,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":356,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":406,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"},{"mid":506,"measureValue":"95","dateRegistered":1421557200000,"measureType":"weight"}]
    var rest_in_db_measure_details = {"mid":306,"measureValue":"110","dateRegistered":1417064400000,"measureType":"weight"}*/


