

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

